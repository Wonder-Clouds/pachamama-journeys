from sqlmodel import SQLModel, Field
from category import Category
import uuid


class Tour(SQLModel, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    title: str = Field(index=True)
    location: str = Field(index=True)
    time: str
    price: float
    description: str
    category: Category
    gallery: list[str]
    cover_image: str
    status: bool