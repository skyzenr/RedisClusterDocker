FROM node:8.10.0

COPY . /usr/src/
WORKDIR /usr/src/


ENV DEBUG ioredis:*
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]
