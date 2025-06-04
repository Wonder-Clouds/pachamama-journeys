from ..models.blog import Blog
from sqlmodel import Session, select
from fastapi import HTTPException


def create_blog(session: Session, blog: Blog) -> Blog:
    pass