# Pachamama Tour API

Este es el API de Pachamama Tour, desarrollado con NestJS.

## Requisitos

- Node.js (versión 14 o superior)
- pnpm (gestor de paquetes)
- Podman (para contenedores)
- Podman Compose (para orquestar los contenedores)

## Instalación

1. Clona el repositorio:

    ```sh
    git clone https://github.com/Wonder-Clouds/pachamama-journeys
    cd pachamama-journeys/backend
    ```

2. Instala las dependencias:

    ```sh
    pnpm install
    ```

3. Crea un archivo [.env](http://_vscodecontentref_/1) en la raíz del proyecto con el siguiente contenido:

    ```env
    # Database connection
    HOST=localhost
    POSTGRES_USER=monchi789
    POSTGRES_PASSWORD=1234
    POSTGRES_DB=pachamama_db
    PORT_DATABASE=5432

    # Nest config
    PORT=8000
    ```

## Uso

### Levantar la base de datos con Podman Compose

1. Asegúrate de tener Podman y Podman Compose instalados.
2. Levanta los servicios definidos en [podman-compose.yml](http://_vscodecontentref_/2):

    ```sh
    podman-compose up -d
    ```

### Ejecutar la aplicación NestJS

1. Compila el proyecto:

    ```sh
    pnpm run build
    ```

2. Inicia la aplicación en modo desarrollo:

    ```sh
    pnpm start:dev
    ```

La API estará disponible en `http://localhost:8000/api/v1/`.

### Documentación Swagger

La documentación Swagger estará disponible en `http://localhost:8000/swagger/`.

## Pruebas

Para ejecutar las pruebas, usa el siguiente comando:

```sh
pnpm test