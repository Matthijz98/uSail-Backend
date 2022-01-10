module.exports ={
  "development": {
    "username": process.env.db_user,
    "password": process.env.db_password,
    "database": process.env.db_database,
    "host": process.env.db_host,
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.db_user,
    "password": process.env.db_password,
    "database": process.env.db_database,
    "host": process.env.db_host,
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.db_user,
    "password": process.env.db_password,
    "database": process.env.db_database,
    "host": process.env.db_host,
    "dialect": "postgres"
  }
}
