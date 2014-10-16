import logging
import logging.config
import os

from dorthy.security.core import SecurityManager
from dorthy.settings import config

from tornado.httpserver import HTTPServer
from tornado.ioloop import IOLoop
from tornado.options import define, options
from tornado.web import Application

from emerald import endpoints
from emerald.security import web_config as security_config

logger = logging.getLogger(__name__)

define("port", default=8888, help="web server port", type=int)
define("webdir", default="build/web", help="web asset directory", type=str)


class MainApp(Application):

    def __init__(self, web_dir, debug=True):

        public_path = os.path.join(os.path.dirname(__file__), web_dir)

        settings = dict(
            cookie_secret=config.web.cookie_secret if "web.cookie_secret" in config else "cookies",
            login_url="/auth/login",
            static_path=public_path,
            template_conf={"variable_start_string": "{(",
                           "variable_end_string": ")}"},
            template_path=os.path.join(public_path, "templates"),
            debug=debug
        )

        # initialize security
        SecurityManager().config_from_object(security_config)

        Application.__init__(self, endpoints.urls, **settings)


def main():

    options.parse_command_line()
    os.environ["SERVER_PORT"] = str(options.port)

    debug = config.app.enabled if "app" in config and config.app.enabled("debug") else True

    logging.config.dictConfig(config.logging())

    logger.info("Server started on port: %s", options.port)
    if debug:
        logger.info("Started in debug mode")

    logger.info("Using web asset directory: %s", options.webdir)

    application = MainApp(options.webdir, debug=debug)

    http_server = HTTPServer(application, xheaders=True, no_keep_alive=True)
    http_server.listen(options.port)

    IOLoop.instance().start()

if __name__ == "__main__":
    main()