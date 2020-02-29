FROM node:12.14.0

# set app directory
WORKDIR /app

# copy package files
COPY package.json ./
COPY package-lock.json ./

# install dependencies
RUN npm install

# expose the api and client ports
EXPOSE 3000
EXPOSE 3001

# start the app
CMD [ "npm", "run", "start:dev" ]