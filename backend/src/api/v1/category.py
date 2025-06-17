from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session
from ...schemas.category import CategorySchema, CategoryCreate
from ...database.engine import get_session
from ...services import category


router = APIRouter(tags=["Category"])


@router.get("/categories/", response_model=list[CategorySchema])
async def get_categories(session: Session = Depends(get_session)):
    return category.list_categories(session)


@router.get("/category/{id_category}", response_model=CategorySchema)
async def get_category(id_category: int, session: Session = Depends(get_session)):
    category_data = category.list_category(session, id_category)

    if not category_data:
        raise HTTPException(status_code=404, detail="Category not found")

    return category_data


@router.post("/category/", response_model=CategorySchema)
async def post_category(
    category_item: CategoryCreate, session: Session = Depends(get_session)
):
    return category.create_category(session, category_item)


@router.put("/category/{id_category}", response_model=CategorySchema)
async def put_category(
    id_category: int,
    category_data: CategoryCreate,
    session: Session = Depends(get_session),
):
    updated = category.update_category(session, id_category, category_data.model_dump())

    if not updated:
        raise HTTPException(status_code=404, detail="Category not found")

    return updated


@router.patch("/category/{id_category}", response_model=CategorySchema)
async def patch_category(
    id_category: int,
    category_data: CategoryCreate,
    session: Session = Depends(get_session),
):
    updated = category.patch_category(session, id_category, category_data)

    if not updated:
        raise HTTPException(status_code=404, detail="Category not found")

    return updated


@router.delete("/category/{id_category}")
async def delete_category(id_category: int, session: Session = Depends(get_session)):
    deleted = category.delete_category(id_category, session)

    if not deleted:
        raise HTTPException(status_code=404, detail="Category not found")

    return {"message": f"Category with id {id_category} deleted"}
