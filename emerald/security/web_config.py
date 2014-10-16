import logging

import dorthy.security.auth_handler

from dorthy.security.access import ExpressionVoter, GroupVoter, SuperUserDecisionManager
from dorthy.security.auth_handler import DefaultLogoutHandler
from dorthy.security.core import HTTPSessionSecurityContextRepository, \
    RequestContextSecurityContextManager, SimpleAuthenticationSerializer

from .auth import UserDBAuthenticationProvider

logger = logging.getLogger(__name__)


AUTH_PROVIDER_URLS = [(r"/auth/login", dorthy.security.auth_handler.UserPasswordAuthHandler),
                      (r"/auth/logout", DefaultLogoutHandler), ]

AUTHENTICATION_PROVIDERS = (UserDBAuthenticationProvider())

_SECURITY_CONTEXT_SERIALIZER = SimpleAuthenticationSerializer()

SECURITY_CONTEXT_REPOSITORY = HTTPSessionSecurityContextRepository(_SECURITY_CONTEXT_SERIALIZER)
SECURITY_CONTEXT_MANAGER = RequestContextSecurityContextManager()

root_group = "root"

_ROOT_GROUP_VOTER = GroupVoter(root_group)
_EXPRESSION_VOTER = ExpressionVoter()

ACCESS_DECISION_MANAGER = SuperUserDecisionManager(_ROOT_GROUP_VOTER, _EXPRESSION_VOTER)