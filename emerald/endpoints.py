from dorthy.web import TemplateHandler

import emerald.root_handler

from emerald.security.web_config import AUTH_PROVIDER_URLS

# security endpoints
urls = list(AUTH_PROVIDER_URLS)

# application endpoints
urls += [
    (r"/", emerald.root_handler.IndexHandler),
    (r".*", TemplateHandler,
        dict(template="error/404.html", status=404))
]