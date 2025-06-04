from sqlmodel import Field, SQLModel
from enum import Enum


class Type(str, Enum):
    tour = "tour"
    blog = "blog"


class Category(SQLModel, table=True):
    id: int = Field(primary_key=True)
    name: str = Field(index=True)
    type: Type
