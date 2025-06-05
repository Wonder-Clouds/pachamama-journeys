from fastapi import APIRouter, Depends, HTTPException, File, Form, UploadFile
from sqlmodel import Session
from uuid import UUID
import os
import shutil
from ...models.blog import Blog
from ...database.engine import get_session
from ...services import blog


router = APIRouter(tags=["Blog"])

UPLOAD_DIR = "static/uploads/blogs"


@router.get("/blogs/", response_model=list[Blog])
async def get_blogs(session: Session = Depends(get_session)):
    return blog.list_blogs(session)


@router.get("/blog/{id_blog}", response_model=Blog)
async def get_blog(id_blog: UUID, session: Session = Depends(get_session)):
    blog_data = blog.list_blog(session, id_blog)

    if not blog_data:
        raise HTTPException(status_code=404, detail="Blog not found")
    
    return blog_data


@router.post("/blog/", response_model=Blog)
async def post_blog(
        title: str = Form(...),
        content: str = Form(...),
        category: int = Form(...),
        status: bool = Form(...), 
        cover: UploadFile = File(None),
        publication_date: str = File(...),
        session: Session = Depends(get_session)
    ):
    
    image_path = None

    if cover:
        os.makedirs(UPLOAD_DIR, exist_ok=True)
        image_path = f"/{UPLOAD_DIR}/{cover.filename}"
        with open(image_path, "wb") as buffer:
            shutil.copyfileobj(cover.file, buffer)
    
    new_blog = Blog(title=title, content=content, category=category, status=status, cover=image_path, session=session, publication_date=publication_date)

    return blog.create_blog(session, new_blog)


@router.put("/blog/{id_blog}", response_model=Blog)
async def put_blog(
    id_blog: UUID,
    title: str = Form(None),
    content: str = Form(None),
    category: int = Form(None),
    status: bool = Form(None),
    publication_date: str = Form(None),
    cover: UploadFile = File(None),
    session: Session = Depends(get_session)
):
    image_path = None

    if cover:
        os.makedirs(UPLOAD_DIR, exist_ok=True)
        image_path = f"{UPLOAD_DIR}/{cover.filename}"
        with open(image_path, "wb") as buffer:
            shutil.copyfileobj(cover.file, buffer)

    blog_data = {
        "title": title,
        "content": content,
        "category": category,
        "status": status, 
        "publication_date": publication_date,
        "cover": image_path
    }

    updated = blog.update_blog(session, id_blog, blog_data)

    if not updated:
        raise HTTPException(status_code=404, detail="Blog not found")
    
    return updated


@router.patch("/blog/{id_blog}", response_model=Blog)
async def patch_blog(
    id_blog: UUID,
    title: str = Form(None),
    content: str = Form(None),
    category: int = Form(None),
    status: bool = Form(None),
    publication_date: str = Form(None),
    cover: UploadFile = File(None),
    session: Session = Depends(get_session)
):
    update_data = {}

    if title is not None:
        update_data["title"] = title
    if content is not None:
        update_data["content"] = content
    if category is not None:
        update_data["category"] = category
    if status is not None:
        update_data["status"] = status
    if publication_date is not None:
        update_data["publication_date"] = publication_date
    if cover:
        os.makedirs(UPLOAD_DIR, exist_ok=True)
        image_path = f"{UPLOAD_DIR}/{cover.filename}"
        with open(image_path, "wb") as buffer:
            shutil.copyfileobj(cover.file, buffer)
        update_data["cover"] = image_path

    updated = blog.patch_blog(session, id_blog, update_data)

    if not updated:
        raise HTTPException(status_code=404, detail="Blog not found")
    
    return updated


@router.delete("/blog/{id_blog}")
async def delete_blog(id_blog: UUID, session: Session = Depends(get_session)):
    deleted = blog.delete_blog(id_blog, session)

    if not deleted:
        raise HTTPException(status_code=404, detail="Blog not found")
    
    return {"message": f"Blog with id {id_blog} deleted"}
