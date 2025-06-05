from ..models.tour import Tour
from sqlmodel import Session, select
from fastapi import HTTPException
import json

def create_tour(session: Session, tour: Tour) -> Tour:
    if isinstance(tour.gallery, list):
        tour.gallery = json.dumps(tour.gallery)

    tour = Tour(**tour.model_dump())
    session.add(tour)
    session.commit()
    session.refresh(tour)
    tour.gallery = json.loads(tour.gallery) if tour.gallery else []
    return tour


def list_tours(session: Session) -> list[Tour]:
    tours = session.exec(select(Tour)).all()
    for t in tours:
        t.gallery = json.loads(t.gallery) if t.gallery else []
    return tours


def list_tour(session: Session, id_tour: str) -> Tour:
    db_tour = session.get(Tour, id_tour)
    if not db_tour:
        raise HTTPException(status_code=404, detail="Tour not found")
    db_tour.gallery = json.loads(db_tour.gallery) if db_tour.gallery else []
    return db_tour


def update_tour(session: Session, id_tour: str, tour_data: dict) -> Tour | None:
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


def patch_tour(session: Session, id_tour: str, tour_data: dict) -> Tour | None:
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
