'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      "id": "57a8e76e-5c06-4078-a81c-4f7695b0c3b4",
      "user_password": "testpass",
      "user_email": "test@test.com",
      "user_name": "matthijs",
      "createdAt": new Date(),
      "updatedAt": new Date()
    },{
      "id": "b80ca1c9-6cc7-4723-a92c-940adea582d7",
      "user_password": "hoiioh",
      "user_email": "lol",
      "user_name": "koen",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op
    await queryInterface.bulkDelete('Users', {id: {[Op.in]: ["57a8e76e-5c06-4078-a81c-4f7695b0c3b4", "b80ca1c9-6cc7-4723-a92c-940adea582d7"]}}, {})
  }
};
