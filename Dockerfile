# Dockerfile

# base image
FROM node:12-alpine

# create & set working directory
WORKDIR /app

# copy source files
COPY package.json package-lock.json ./

# install dependencies
RUN npm install


COPY . .

RUN npm run build
ENV HOST=0.0.0.0
EXPOSE 3000
# start app
CMD ["npm", "start"]

