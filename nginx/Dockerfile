FROM nginx:1.17.9-alpine

WORKDIR /etc/nginx

# copy config files
COPY . ./

# expose the http port
EXPOSE 80

# start the server
CMD ["nginx", "-g", "daemon off;"]