import logging

from dorthy.db import Session
from sqlalchemy.orm.exc import NoResultFound

from .models.users import UserEntity


logger = logging.getLogger(__name__)


def get_user_by_username(username, not_found_error=True):
    """
    Finds a user by the given username.

    Args:
        username: the username
        user_type: user type to return - either 'Student' or 'Staff' (optional)
        not_found_error: if True than an exception will be raised if the user is
                         not found in the repository
    Returns:
        the user entity
    Raises:
        NoResultFound: An error if no record is found
    """
    assert username, "Username cannot be None"

    try:
        return Session().query(UserEntity).\
            filter(UserEntity.username == username.lower()).one()
    except NoResultFound:
        logger.debug("No user found for username: %s", username)
        if not_found_error:
            raise
        return None