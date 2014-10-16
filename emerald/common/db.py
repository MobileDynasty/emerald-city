from dorthy.db import PrimaryKeyMixin, UpdateTimestampMixin


class BaseEntityMixin(PrimaryKeyMixin, UpdateTimestampMixin):
    pass