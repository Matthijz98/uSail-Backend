module.exports = (sequelize, Sequelize) => {
    const Boat = sequelize.define("boat", {
        name: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.STRING
        },
        created_at: {
            type: Sequelize.DATE
        }
    });

    return Boat;
};