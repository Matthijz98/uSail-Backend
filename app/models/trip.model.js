const User = require('user.model')

module.exports = (sequelize, Sequelize) => {
    const Trip = sequelize.define("trip", {
        id: {
            type: Sequelize.UUID,
            primaryKey: true
        },
        trip_by_user: {
            type: Sequelize.UUID,
            references: {
                model: User,
                key: 'id'
            }
        },
        trip_start_time: {
            type: Sequelize.DATE
        },
        trip_end_time: {
            type: Sequelize.DATE
        },
        trip_start_location: {
            type: Sequelize.STRING
        },
        trip_end_location: {
            type: Sequelize.STRING
        },
        trip_title: {
            type: Sequelize.STRING,
            allowNull: true
        },
        trip_created_at: {
            type: Sequelize.DATE
        },
        trip_updated_at: {
            type: Sequelize.DATE
        }
    });

    return Trip;
};