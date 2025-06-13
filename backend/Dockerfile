# Image of container
FROM python:3.12.11-alpine3.22

# Define the workdir
WORKDIR /app

# Install poetry
RUN pip install poetry

# Copy poetry configuration
COPY pyproject.toml poetry.lock* ./

# Configure poetry to not create virtual enviroment
RUN poetry config virtualenvs.create false

# Install dependencies only (no root package)
RUN poetry install --no-root

# Copy source code
COPY src/ ./src/

# Export port
EXPOSE 8000

# Run the application
CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]