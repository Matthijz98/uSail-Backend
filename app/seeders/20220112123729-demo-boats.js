'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Boats', [{
       "id": "7520d9b2-73b3-11ec-90d6-0242ac120003",
       "boat_name": "test boat name",
       "boat_location": "coordinate",
       "boat_active_user": "b80ca1c9-6cc7-4723-a92c-940adea582d7",
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
