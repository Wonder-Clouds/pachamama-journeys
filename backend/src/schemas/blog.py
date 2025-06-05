from pydantic import BaseModel
from category import Category

# Schema of Blog
class Blog(BaseModel):
    id: str
    title: str
    content: str
    cover: str | None
    category: Category
    status: bool
    publication_date: str
