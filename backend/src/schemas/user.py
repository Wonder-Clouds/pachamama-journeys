from pydantic import BaseModel, ConfigDict
import uuid
from ..shared.enums import TypeUser


# Schema of User
class UserSchema(BaseModel):
    id: uuid.UUID
    name: str
    username: str
    type: TypeUser
    disabled: bool

    model_config = ConfigDict(
        json_schema_extra={
            "example": {
                "id": "c303282d-f2e6-46ca-a04a-35d3d873712d",
                "name": "Pedro",
                "username": "pedro_04",
                "type": "user",
                "disabled": False
            }
        }
    )


# Schema of User with hashed password
class UserInDB(UserSchema):
    password: str

    model_config = ConfigDict(
        json_schema_extra={
            "example": {
                "id": "c303282d-f2e6-46ca-a04a-35d3d873712d",
                "name": "Pedro",
                "username": "pedro_04",
                "password": "-2987146553041852702",
                "type": "user",
                "disabled": False
            }
        }
    )


# Schema to create a user with plain password
class UserCreate(BaseModel):
    name: str
    username: str
    type: TypeUser
    disabled: bool
    password: str

    model_config = ConfigDict(
        json_schema_extra={
            "example": {
                "name": "Pedro",
                "username": "pedro_04",
                "password": "1234",
                "type": "user",
                "disabled": False
            }
        }
    )