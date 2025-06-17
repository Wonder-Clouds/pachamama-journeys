from sqlmodel import SQLModel, Field
import uuid
from ..schemas.user import TypeUser


class User(SQLModel, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    name: str = Field(index=True)
    username: str = Field(unique=True, index=True)
    password: str
    type: TypeUser
    disabled: bool
