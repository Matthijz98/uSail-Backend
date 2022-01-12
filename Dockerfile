# Common build stage
FROM node:14.14.0-alpine3.12

COPY . ./uSail

WORKDIR /uSail

RUN npm install

RUN npm install -g sequelize-cli

EXPOSE 3000

#ENTRYPOINT ["entrypoint.sh"]
