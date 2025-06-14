from ..models.blog import Blog
from sqlmodel import Session, select
from fastapi import HTTPException


def create_blog(session: Session, blog: Blog) -> Blog:
    blog = Blog(**blog.model_dump())
    session.add(blog)
    session.commit()
    session.refresh(blog)
    return blog


def list_blogs(session: Session) -> list[Blog]:
    return session.exec(select(Blog)).all()


def list_blog(session: Session, id_blog: str):
    db_blog = session.get(Blog, id_blog)

    if not db_blog:
        raise HTTPException(status_code=404, detail="Blog not found")

    return db_blog


def update_blog(session: Session, id_blog: str, blog_data: dict) -> Blog | None:
    db_blog = session.get(Blog, id_blog)
    if not db_blog:
        raise HTTPException(status_code=404, detail="Blog not found")

    for key, value in blog_data.items():
        setattr(db_blog, key, value)

    session.commit()
    session.refresh(db_blog)
    return db_blog


def patch_blog(session: Session, id_blog: str, blog_data: dict) -> Blog | None:
    db_blog = session.get(Blog, id_blog)

    if not db_blog:
        raise HTTPException(status_code=404, detail="Blog not found")

    for key, value in blog_data.items():
        setattr(db_blog, key, value)

    session.add(db_blog)
    session.commit()
    session.refresh(db_blog)

    return db_blog


def delete_blog(session: Session, id_blog: str) -> bool:
    db_blog = session.get(Blog, id_blog)

    if not db_blog:
        raise HTTPException(status_code=404, detail="Blog not found")

    session.delete(db_blog)
    session.commit()

    return True
