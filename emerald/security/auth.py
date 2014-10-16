import logging

from dorthy.security import AuthenticationException, Principal
from dorthy.security.auth import UsernamePasswordAuthenticationToken
from dorthy.security.core import SecurityManager, SimpleAuthentication
from dorthy.security.crypto import validate_password

from emerald.admin import user_services
from emerald.admin.models.users import UserStatusTypes

logger = logging.getLogger(__name__)


def get_authentication(user):

    if not user.status == UserStatusTypes.Active:
        raise AuthenticationException("User is disabled.")

    principal = Principal(user.uuid, user.username, locale=user.locale, timezone=user.timezone)

    # TODO: load groups or authorities from DB, file, etc.

    return SimpleAuthentication(principal, groups=None, authorities=None)


def verify_password(user, password):
    if user and password:
        return validate_password(password, user.password)
    return False


class UserDBAuthenticationProvider(object):
    """
    A basic database authentication provider.
    """

    def supports(self, authentication_token):
        if authentication_token and isinstance(authentication_token, UsernamePasswordAuthenticationToken):
            return True
        else:
            return False

    def authenticate(self, authentication_token):

        user = user_services.get_user_by_username(authentication_token.username, not_found_error=False)
        if not user:
            raise AuthenticationException("User not found: {}".format(authentication_token.username))

        if not verify_password(user, authentication_token.password):
            raise AuthenticationException("Invalid password.")

        SecurityManager().set_authentication(get_authentication(user))