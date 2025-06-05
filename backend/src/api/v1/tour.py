from fastapi import APIRouter, Depends, HTTPException, File, UploadFile, Form
from sqlmodel import Session
from typing import List
from uuid import UUID
import os
import shutil
from ...models.tour import Tour
from ...database.engine import get_session
from ...services import tour


router = APIRouter(tags=["Tour"])

UPLOAD_DIR = "static/uploads/tours"

@router.get("/tours/", response_model=list[Tour])
async def get_tours(session: Session = Depends(get_session)):
    return tour.list_tours(session)


@router.get("/tour/{id_tour}", response_model=Tour)
async def get_tour(id_tour: str, session: Session = Depends(get_session)):
    db_tour = tour.list_tour(id_tour, session)

    if not db_tour:
        raise HTTPException(status_code=404, detail="Tour not found")
    
    return db_tour


@router.post("/tour/", response_model=Tour)
async def post_tour(
        title: str = Form(...),
        location: str = Form(...),
        time: str = Form(...),
        price: str = Form(...),
        description: str = Form(...),
        category: int = Form(...),
        status: bool = Form(...),
        cover_image: UploadFile = File(...),
        gallery: List[UploadFile] = File([]),
        session: Session = Depends(get_session)
    ):
    os.makedirs(UPLOAD_DIR, exist_ok=True)


    # Save image of cover
    if cover_image:
        cover_path = f"{UPLOAD_DIR}/{cover_image.filename}" 
        with open(cover_path, "wb") as buffer:
            shutil.copyfileobj(cover_image.file, buffer)

    # Save the gallery
    gallery_paths = []
    for image in gallery:
        image_path = f"{UPLOAD_DIR}/{image.filename}" 
        with open(image_path, "wb") as buffer:
            shutil.copyfileobj(image.file, buffer)
        gallery_paths.append(image_path)

    new_tour = Tour(
        title=title,
        location=location,
        time=time,
        price=price,
        description=description,
        category=category,
        gallery=gallery_paths,
        cover=cover_path,
        status=status
    )

    return tour.create_tour(session, new_tour)


@router.put("/tour/{id_tour}", response_model=Tour)
async def put_tour(
    id_tour: UUID,
    title: str = Form(None),
    location: str = Form(None),
    time: str = Form(None),
    price: float = Form(None),
    description: str = Form(None),
    category: int = Form(None),
    gallery: List[UploadFile] = File([]),
    cover_image: UploadFile = File(None),
    session: Session = Depends(get_session)
):
    image_cover = None
    gallery_paths = []
    
    os.makedirs(UPLOAD_DIR, exist_ok=True)

    if cover_image:
        image_cover = f"{UPLOAD_DIR}/{cover_image.filename}"
        with open(image_cover, "wb") as buffer:
            shutil.copyfileobj(cover_image.file, buffer)

    if gallery:
        for image in gallery:
            image_path = f"{UPLOAD_DIR}/{image.filename}"
            with open(image_path, "wb") as buffer:
                shutil.copyfileobj(image.file, buffer)
            gallery_paths.append(image_path)

    tour_data = {
        "title": title,
        "location": location,
        "time": time,
        "price": price,
        "description": description,
        "category": category,
        "gallery": gallery_paths,
        "cover_image": image_cover
    }

    updated = tour.update_tour(session, id_tour, tour_data)

    if not updated:
        raise HTTPException(status_code=404, detail="Tour not found")
    
    return updated


@router.patch("/tour/{id_tour}", response_model=Tour)
async def patch_tour(
    id_tour: UUID,
    title: str = Form(None),
    location: str = Form(None),
    time: str = Form(None),
    price: float = Form(None),
    description: str = Form(None),
    category: int = Form(None),
    gallery: List[UploadFile] = File([]),
    cover_image: UploadFile = File(None),
    session: Session = Depends(get_session)
):
    gallery_list = []
    tour_data = {}

    os.makedirs(UPLOAD_DIR, exist_ok=True)    

    if title is not None:
        tour_data["title"] = title
    if location is not None:
        tour_data["location"] = location
    if time is not None:
        tour_data["time"] = time
    if price is not None:
        tour_data["price"] = price
    if description is not None:
        tour_data["description"] = description
    if category is not None:
        tour_data["category"] = category
    
    if gallery:
        for image in gallery:
            image_path = f"{UPLOAD_DIR}/{image.filename}"
            with open(image_path, "wb") as buffer:
                shutil.copyfileobj(image.file, buffer)
            gallery_list.append(image_path)
        tour_data["gallery"] = gallery_list

    if cover_image:
        image_cover = f"{UPLOAD_DIR}/{cover_image.filename}"
        with open(image_cover, "wb") as buffer:
            shutil.copyfileobj(cover_image.file, buffer)
        tour_data["cover_image"] = image_cover

    updated = tour.patch_tour(session, id_tour, tour_data)

    if not updated:
        raise HTTPException(status_code=404, detail="Tour not found")
    
    return updated


@router.delete("/tour/{id_tour}")
async def delete_tour(id_tour: UUID, session: Session = Depends(get_session)):
    deleted = tour.delete_tour(id_tour, session)

    if not deleted:
        raise HTTPException(status_code=404, detail="Tour not found")
    
    return {"message": f"Tour with id {id_tour} deleted"}
