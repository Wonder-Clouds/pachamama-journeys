from pydantic import BaseModel
from enum import Enum


# Enum of types of Category
class Type(str, Enum):
    tour = "tour"
    blog = "blog"
 

# Schema of Category
class Category(BaseModel):
    id: int
    name: str
    type: Type
