module.exports = (sequelize, Sequelize) => {
    const Boat = sequelize.define("boat", {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false
        },
        boat_name: {
            type: Sequelize.STRING
        },
        boat_image: {
            type: Sequelize.STRING
        },
        boat_description: {
            type: Sequelize.TEXT
        },
        boat_created_at: {
            type: Sequelize.DATE
        },
        boat_updated_at: {
            type: Sequelize.DATE
        }
    });

    return Boat;
};