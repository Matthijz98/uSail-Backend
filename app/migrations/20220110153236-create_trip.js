'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Trips', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
      },
      trip_by_user: {
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      trip_with_boat: {
        type: Sequelize.UUID,
        references: {
          model: 'Boats',
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Trips');
  }
};
