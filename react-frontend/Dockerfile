# Use the official Node.js image from the Docker Hub
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port on which the React app will run
EXPOSE 3000

# Command to run the React development server
CMD ["npm", "start"]
