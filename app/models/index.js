const dbConfig = require("../db/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.boat = require("../models/boat.model.js")(sequelize, Sequelize);
db.user = require("../models/user.model")(sequelize, Sequelize);
db.trip = require("../models/trip.model")(sequelize, Sequelize);

// db.user.hasMany(db.trip, {as: "trips"});
// db.trip.belongsTo(db.user, {
//     foreignKey: "id",
//     as: "user"
// })

module.exports = db;