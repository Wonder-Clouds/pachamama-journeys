from pydantic import BaseModel, ConfigDict
from ..shared.enums import CategoryType

# Schema of Category
class CategorySchema(BaseModel):
    id: int
    name: str
    type: CategoryType
    
    model_config = ConfigDict(
        json_schema_extra={
            "example": {
                "id": 1,
                "name": "Cusco",
                "type": "tour"
            }
        }
    )