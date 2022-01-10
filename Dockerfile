# Common build stage
FROM node:14.14.0-alpine3.12

COPY . ./app

WORKDIR /app

RUN npm install

RUN npm install -g sequelize-cli

EXPOSE 3000

ENTRYPOINT ["entrypoint.sh"]
