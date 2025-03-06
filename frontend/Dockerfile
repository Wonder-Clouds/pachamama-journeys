# Get the image of node
FROM node:20-alpine

# Define the workdir
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy the package.json and pnpm-lock.yaml files
COPY package.json pnpm-lock.yaml ./

# Install the dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest files
COPY . .

# Build the next.js application
RUN pnpm build

# Expose port 3000
EXPOSE 3000

# Start the server on production
CMD ["pnpm", "start"]