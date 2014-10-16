from dorthy.json import jsonify
from dorthy.security import SecurityManager
from dorthy.web import BaseHandler, render, authenticated

from emerald.admin import user_services


class IndexHandler(BaseHandler):

    @authenticated(redirect=True)
    @render
    def get(self):
        authentication = SecurityManager().get_authentication()
        user = user_services.get_user_by_username(authentication.principal.name)
        profile = jsonify(dict(auth=authentication, user=user), camel_case=True)
        return "index.html", dict(user_profile=profile)
