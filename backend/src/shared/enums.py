from enum import Enum


# Enum of types of Category
class CategoryType(str, Enum):
    tour = "tour"
    blog = "blog"


# Enum of types of Users
class TypeUser(str, Enum):
    user = "user"
    admin = "admin"
