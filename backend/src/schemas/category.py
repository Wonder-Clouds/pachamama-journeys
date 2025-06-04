from pydantic import BaseModel, ConfigDict
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
    
    model_config = ConfigDict(
        json_schema_extra={
            "example": {
                "id": 1,
                "name": "Cusco",
                "type": "tour"
            }
        }
    )