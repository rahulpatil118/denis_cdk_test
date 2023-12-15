# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install
RUN npm install -g aws-cdk

# Install AWS CLI v2
RUN curl "https://d1vvhvl2y92vvt.cloudfront.net/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" \
    && unzip awscliv2.zip \
    &&  ./aws/install

RUN npm install -g aws-cdk

# Copy the entire project directory to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 8090

# Set AWS credentials (replace with your own credentials)
ENV AWS_ACCESS_KEY_ID=AKIAIAG5IGOCXKCEKA
ENV AWS_SECRET_ACCESS_KEY=PA01pCIIBWFTuXfQWjcbww0/QcDn/hq6Lww
ENV AWS_DEFAULT_REGION=ap-south-1

# Run the CDK application
CMD ["npm install","npm run build" , "cdk synth", "cdk deploy" ]
