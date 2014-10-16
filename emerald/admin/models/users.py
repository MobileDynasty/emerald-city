from dorthy.enum import DeclarativeEnum
from dorthy.db import Entity

from sqlalchemy import Column, String

from emerald.common.db import BaseEntityMixin


class UserStatusTypes(DeclarativeEnum):
    """
    User status flags
    """

    Active = "active",
    Locked = "locked",
    Disabled = "disabled",


class UserEntity(Entity, BaseEntityMixin):
    """
    Provides an entity for a user object. The user is
    the common entity across all people who interact with
    the system.
    """

    __tablename__ = "users"

    _transients = ("id", "password", "created", "updated", "uuid")

    uuid = Column(String(32), nullable=False, unique=True)

    username = Column(String(255), nullable=False, unique=True)

    status = Column(UserStatusTypes.db_type(), nullable=False)

    timezone = Column("tz_code", String(50), nullable=False)
    locale = Column("locale_code", String(20), nullable=True)

    first_name = Column(String(50), nullable=False)
    last_name = Column(String(50), nullable=False)
    email = Column(String(255), nullable=False, unique=True)

    password = Column(String(1000), nullable=False)
