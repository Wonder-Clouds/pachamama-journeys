from fastapi import APIRouter, Depends, HTTPException, File, Form, UploadFile
from sqlmodel import Session
import os
import shutil
from ...models.blog import Blog
from ...database.engine import get_session
from ...services import blog


router = APIRouter(tags=["Blog"])

UPLOAD_DIR = "static/uploads/blogs"


@router.get("/blogs/", response_model=list[Blog])
def get_blogs(session: Session = Depends(get_session)):
    return blog.list_blogs(session)


@router.get("/blog/{id_blog}", response_model=Blog)
def get_blog(id_blog: str, session: Session = Depends(get_session)):
    blog_data = blog.list_blog(session, id_blog)

    if not blog_data:
        raise HTTPException(status_code=404, detail="Blog not found")
    
    return blog_data


@router.post("/blog/", response_model=Blog)
def post_blog(title: str = Form(...),
              content: str = Form(...),
              category: str = Form(...),
              status: bool = Form(...), 
              cover: UploadFile = File(None),
              publication_date: str = File(...),
              session: Session = Depends(get_session)):
    
    image_path = None

    if cover:
        os.makedirs(UPLOAD_DIR, exist_ok=True)
        image_path = f"{UPLOAD_DIR}/{cover.filename}"
        with open(image_path, "wb") as buffer:
            shutil.copyfileobj(cover.file, buffer)
    
    new_blog = Blog(title=title, content=content, category=category, status=status, cover=image_path, session=session, publication_date=publication_date)

    return blog.create_blog(session, new_blog)


@router.put("/blog/{id_blog}", response_model=Blog)
def put_blog(id_blog: str, blog_data: Blog, session: Session = Depends(get_session)):
    updated = blog.update_blog(session, id_blog, blog_data)

    if not updated:
        raise HTTPException(status_code=404, detail="Blog not found")
    
    return updated


@router.patch("/blog/{id_blog}", response_model=Blog)
def patch_blog(id_blog: str, blog_data: Blog, session: Session = Depends(get_session)):
    updated = blog.patch_blog(session, id_blog, blog_data)

    if not updated:
        raise HTTPException(status_code=404, detail="Blog not found")
    
    return updated


@router.delete("/blog/{id_blog}")
def delete_blog(id_blog: str, session: Session = Depends(get_session)):
    deleted = blog.delete_blog(id_blog, session)

    if not deleted:
        raise HTTPException(status_code=404, detail="Blog not found")
    
    return deleted
