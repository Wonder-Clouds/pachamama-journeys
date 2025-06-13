from pydantic import BaseModel
from category import CategorySchema


# Schema of Tour
class TourSchema(BaseModel):
    id: str
    title: str
    location: str
    time: str
    price: float
    description: str
    category: CategorySchema
    gallery: list[str]
    cover_image: str
    status: bool
