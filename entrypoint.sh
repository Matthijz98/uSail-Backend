#!/bin/sh
sequelize db:migrate
sequelize db:seed:all
npm run dev
