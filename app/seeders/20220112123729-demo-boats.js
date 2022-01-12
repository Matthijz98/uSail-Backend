'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Boats', [{
       "id": "0a70658f-04e0-4be1-84ae-02656eb13406",
       "boat_name": "test boat name",
       "boat_location": "boat location coordinates",
       "boat_active_user": "user which is currently using the boat",
       "boat_image": null,
       "boat_description": "This boat is a great boat for testing",
       "createdAt": new Date(),
       "updatedAt": new Date()
     }], {});

  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op
    await queryInterface.bulkDelete('Boats', {id: {[Op.in]: ["0a70658f-04e0-4be1-84ae-02656eb13406"]}}, {})
  }
};
