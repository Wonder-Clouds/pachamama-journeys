from ..models.tour import Tour
from ..schemas.tour import TourSchema, TourCreate
from ..schemas.category import CategorySchema
from ..models.category import Category
from sqlmodel import Session, select
from fastapi import HTTPException
from uuid import UUID
import json

def create_tour(session: Session, tour: TourCreate) -> TourSchema:
    if isinstance(tour.gallery, list):
        tour.gallery = json.dumps(tour.gallery)

    tour = TourSchema(**tour.model_dump())
    session.add(tour)
    session.commit()
    session.refresh(tour)
    tour.gallery = json.loads(tour.gallery) if tour.gallery else []
    return tour


def list_tours(session: Session) -> list[TourSchema]:
    tours = session.exec(select(Tour)).all()
    result = []
    for t in tours:
        t.gallery = json.loads(t.gallery) if t.gallery else []
        category_obj = session.get(Category, t.category)
        category_schema = CategorySchema.model_validate(category_obj.__dict__)
        result.append(
            TourSchema(
                id=t.id,
                title=t.title,
                location=t.location,
                time=t.time,
                price=t.price,
                description=t.description,
                category=category_schema,
                gallery=t.gallery,
                cover_image=t.cover_image,
                status=t.status
            )
        )
    return result


def list_tour(session: Session, id_tour: UUID) -> TourSchema:
    db_tour = session.get(Tour, id_tour)
    if not db_tour:
        raise HTTPException(status_code=404, detail="Tour not found")
    db_tour.gallery = json.loads(db_tour.gallery) if db_tour.gallery else []
    return db_tour


def update_tour(session: Session, id_tour: UUID, tour_data: dict) -> TourSchema | None:
    db_tour = session.get(Tour, id_tour)
    if not db_tour:
        raise HTTPException(status_code=404, detail="Tour not found")
    if "gallery" in tour_data and isinstance(tour_data["gallery"], list):
        tour_data["gallery"] = json.dumps(tour_data["gallery"])
    for key, value in tour_data.items():
        setattr(db_tour, key, value)
    session.commit()
    session.refresh(db_tour)
    db_tour.gallery = json.loads(db_tour.gallery) if db_tour.gallery else []
    return db_tour


def patch_tour(session: Session, id_tour: UUID, tour_data: dict) -> TourSchema | None:
    db_tour = session.get(Tour, id_tour)
    if not db_tour:
        raise HTTPException(status_code=404, detail="Tour not found")
    if "gallery" in tour_data and isinstance(tour_data["gallery"], list):
        tour_data["gallery"] = json.dumps(tour_data["gallery"])
    for key, value in tour_data.items():
        setattr(db_tour, key, value)
    session.add(db_tour)
    session.commit()
    session.refresh(db_tour)
    db_tour.gallery = json.loads(db_tour.gallery) if db_tour.gallery else []
    return db_tour


def delete_tour(session: Session, id_tour: str) -> bool:
    db_tour = session.get(Tour, id_tour)

    if not db_tour:
        raise HTTPException(status_code=404, detail="Tour not found")
    
    session.delete(db_tour)
    session.commit()

    return True
