# Dockerfile for Node.js backend
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port
EXPOSE 5003

# Start the backend server
CMD ["npm", "run", "dev"]