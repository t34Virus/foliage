# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:lts-alpine3.15 as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install -g npm@8.16.0

RUN npm install --legacy-peer-deps

# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/foliage /usr/share/nginx/html

# Expose port 80
EXPOSE 3000