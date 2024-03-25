# Use node image as base image
FROM node:latest

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json for server and install dependencies
COPY server/package*.json ./server/
RUN cd server && npm install

# Copy package.json and package-lock.json for client and install dependencies
COPY client/package*.json ./client/
RUN cd client && npm install

# Copy the rest of the server and client code into the container
COPY server ./server
COPY client ./client

# Build React app
RUN cd client && npm run build

# Expose port 5000 for the server
EXPOSE 5000

# Set the command to run your server
CMD ["node", "server/index.js"]
