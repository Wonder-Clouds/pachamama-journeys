from pydantic import BaseModel, ConfigDict
from .category import CategorySchema
from uuid import UUID


# Schema of Tour
class TourSchema(BaseModel):
    id: UUID
    title: str
    location: str
    time: str
    price: float
    description: str
    category: CategorySchema
    gallery: list[str]
    cover_image: str
    status: bool

    model_config = ConfigDict(
        json_schema_extra={
            "example": {
                "id": "c303282d-f2e6-46ca-a04a-35d3d873712d",
                "title": "Valle Vip",
                "location": "Valle Sagrado, Cusco",
                "price": 456.00,
                "description": "Tour por el Valle Sagrado del Cusco.",
                "category": {
                    "id": 4,
                    "name": "Aventuras",
                    "type": "tour"
                },
                "gallery": [
                    "static/uploads/blogs/Screenshot from 2025-02-27 00-26-31.png",
                    "category", "static/uploads/blogs/Screenshot from 2025-02-27 00-26-31.png",
                    "category", "static/uploads/blogs/Screenshot from 2025-02-27 00-26-31.png",
                    "category", "static/uploads/blogs/Screenshot from 2025-02-27 00-26-31.png",
                    "category"
                ], 
                "cover_image": "static/uploads/blogs/Screenshot from 2025-02-27 00-26-31.png",
                "status": True
            }
        }
    )


class TourCreate(BaseModel):
    title: str
    location: str
    time: str
    price: float
    description: str
    category: CategorySchema
    gallery: list[str]
    cover_image: str
    status: bool

    model_config = ConfigDict(
        json_schema_extra={
            "example": {
                "title": "Valle Vip",
                "location": "Valle Sagrado, Cusco",
                "price": 456.00,
                "description": "Tour por el Valle Sagrado del Cusco.",
                "category": {
                    "id": 4,
                    "name": "Aventuras",
                    "type": "tour"
                },
                "gallery": [
                    "static/uploads/blogs/Screenshot from 2025-02-27 00-26-31.png",
                    "category", "static/uploads/blogs/Screenshot from 2025-02-27 00-26-31.png",
                    "category", "static/uploads/blogs/Screenshot from 2025-02-27 00-26-31.png",
                    "category", "static/uploads/blogs/Screenshot from 2025-02-27 00-26-31.png",
                    "category"
                ], 
                "cover_image": "static/uploads/blogs/Screenshot from 2025-02-27 00-26-31.png",
                "status": True
            }
        }
    )
