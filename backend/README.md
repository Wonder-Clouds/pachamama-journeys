# Pachamama Journey CMS

Pachamama Journey es un CMS (Content Management System) desarrollado para una agencia de turismo. Permite gestionar tours, blogs, usuarios y categorías de manera sencilla y eficiente. El backend está construido con **FastAPI** y utiliza **PostgreSQL** como base de datos.

## Características principales

- Gestión de tours turísticos y blogs.
- Administración de usuarios y roles.
- Manejo de categorías para clasificar contenido.
- API RESTful lista para integrarse con frontends modernos.
- Autenticación segura con JWT.
- Configuración sencilla mediante archivos `.env`.
- Uso de **Poetry** para la gestión de dependencias y entorno virtual.
- Base de datos gestionada fácilmente con **Podman Compose** o Docker Compose.

---

## Requisitos previos

- [Poetry](https://python-poetry.org/docs/#installation)
- [Podman](https://podman.io/getting-started/installation) o [Docker](https://docs.docker.com/get-docker/)
- Python 3.11+

---

## Instalación y puesta en marcha

1. **Clona el repositorio:**

   ```sh
   git clone https://github.com/Wonder-Clouds/pachamama-journeys
   cd backend
   ```

2. **Crea el archivo `.env`:**

   Ejemplo de configuración:

   ```env
   # Database
   POSTGRES_USER=example_user
   POSTGRES_PASSWORD=example_password
   POSTGRES_DB=example_db
   DB_PORT=5432
   DB_HOST=localhost

   # CORS
   CORS_ORIGINS=localhost:5173,localhost:8000,localhost:3000

   # JWT
   SECRET_KEY=your_secret_key_here
   ALGORITHM=HS256
   SALT=<NUMERO_A_ELECCION>
   ACCESS_TOKEN_EXPIRE_MINUTES=<NUMERO_A_ELECCION>

   # Dev Mode
   DEPLOYEMENT=false
   ```

3. **Instala las dependencias con Poetry:**

   ```sh
   poetry install
   ```

4. **Levanta la base de datos con Podman Compose:**

   ```sh
   podman-compose up -d
   ```
   > Si usas Docker, puedes usar `docker-compose up -d` (el archivo es compatible).

5. **Inicia el servidor FastAPI:**

   ```sh
   poetry run fastapi dev src/main.py
   ```

---

## Endpoints principales

- `/api/v1/tours/` - Gestión de tours
- `/api/v1/blogs/` - Gestión de blogs
- `/api/v1/categories/` - Gestión de categorías
- `/api/v1/users/` - Gestión de usuarios

La documentación interactiva estará disponible en `/docs` si el entorno no es de producción.

---

## Formateo y linting del código

Para mantener la calidad y consistencia del código, utiliza las siguientes herramientas:

- **Black** para formatear automáticamente el código.
- **Ruff** para análisis estático y corrección de estilo.

### Comandos útiles

Formatear todo el código fuente con Black:

```sh
poetry run black src
```

Revisar el código con Ruff:

```sh
poetry run ruff check src
```

Puedes agregar estos comandos a tu flujo de trabajo antes de hacer commits para asegurar un código limpio y consistente.

## Notas

- Los archivos estáticos (imágenes, etc.) se almacenan en la carpeta `static/`.
- Puedes modificar los orígenes permitidos de CORS en el archivo `.env`.
- Para detener la base de datos:  
  ```sh
  podman-compose down
  ```

---

## Licencia

MIT

---

Desarrollado por Wonder Clouds.