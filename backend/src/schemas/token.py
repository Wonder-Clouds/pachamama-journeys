from pydantic import BaseModel


# Schema of JWT Token
class TokenSchema(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: str | None = None
