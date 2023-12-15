# Use an official Node.js runtime as a parent image
FROM node:20-alpine3.19

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install
RUN npm install -g aws-cdk

# Copy the entire project directory to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 8090

# Define environment variables (if needed)
ENV account = 607332757880
ENV region = ap-south-1

# Run the CDK application
CMD ["npm install ", "npm run build" , "cdk synth", "cdk deploy" ]
