#!/bin/sh
sequelize db:migrate:undo:all
sequelize db:migrate
sequelize db:seed:all
npm run dev
