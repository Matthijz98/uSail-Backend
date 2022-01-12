'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let start_date = new Date()
    start_date.setHours(start_date.getHours() - 4)

    await queryInterface.bulkInsert('Trips', [{
      "id": "56f533bb-0c02-4c4b-8f65-a4f71e30cbf2",
      "trip_by_user": "b80ca1c9-6cc7-4723-a92c-940adea582d7",
      "trip_with_boat": "7520d9b2-73b3-11ec-90d6-0242ac120003",
      "trip_title": "test_trip",
      "trip_start_time": start_date,
      "trip_start_location": "52.0000:32.000",
      "trip_end_time": new Date(),
      "trip_end_location": "52.0000:32.000",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op
    await queryInterface.bulkDelete('Trips', {id: {[Op.in]: ["0a70658f-04e0-4be1-84ae-02656eb13406"]}}, {})
  }
};
