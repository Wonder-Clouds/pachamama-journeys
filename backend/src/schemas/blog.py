from pydantic import BaseModel
from category import CategorySchema

# Schema of Blog
class BlogSchema(BaseModel):
    id: str
    title: str
    content: str
    cover: str | None
    category: CategorySchema
    status: bool
    publication_date: str
