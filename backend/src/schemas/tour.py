from pydantic import BaseModel
from category import Category


# Schema of Tour
class Tour(BaseModel):
    id: str
    title: str
    location: str
    time: str
    price: float
    description: str
    category: Category
    gallery: list[str]
    cover_image: str
    status: bool
