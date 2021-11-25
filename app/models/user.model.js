module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        id:{
            type: Sequelize.UUID ,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false
        },
        user_profile_image:{
            type: Sequelize.STRING
        },
        user_name: {
            type: Sequelize.STRING
        },
        user_password: {
            type: Sequelize.STRING
        },
        user_email: {
            type: Sequelize.STRING
        },
        user_full_name: {
            type: Sequelize.STRING
        },
        user_created_at: {
            type: Sequelize.DATE
        },
        user_updated_at: {
            type: Sequelize.DATE
        }
    });

    return User;
};