FROM node:12.16.1-alpine

# set app directory
WORKDIR /app

# copy package files
COPY package.json ./
COPY package-lock.json ./

# install build tools
RUN apk update \
    && apk upgrade \
    && apk --no-cache add \
    autoconf automake make g++ libc6-compat \
    libjpeg-turbo-dev libpng-dev nasm

# install dependencies
RUN npm install --no-optional

# copy app source into container
COPY . ./

# expose the api and client ports
EXPOSE 3000
EXPOSE 3001

# start the app
CMD [ "npm", "run", "start:prod" ]