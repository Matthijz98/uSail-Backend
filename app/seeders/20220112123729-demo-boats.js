'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Boats', [{
       "id": "7520d9b2-73b3-11ec-90d6-0242ac120003",
       "boat_name": "Vliegendedraak",
       "boat_location": "52.171479081592764, 4.5224195718763704",
       "boat_active_user": null,
       "boat_image": null,
       "boat_description": "Poly valk",
       "createdAt": new Date(),
       "updatedAt": new Date()
     },{
       "id": "c3c31204-48ef-40b9-a890-f47708701526",
       "boat_name": "Rode Leeuw",
       "boat_location": "52.171466024406485, 4.522583186626279",
       "boat_active_user": null,
       "boat_image": null,
       "boat_description": "Poly valk",
       "createdAt": new Date(),
       "updatedAt": new Date()
     },{
       "id": "414503b3-7056-4674-a58f-0edcda2b3a37",
       "boat_name": "Admiraal de Ruiter",
       "boat_location": "52.17157479990429, 4.522033333778226",
       "boat_active_user": null,
       "boat_image": null,
       "boat_description": "Poly valk",
       "createdAt": new Date(),
       "updatedAt": new Date()
     }], {});

  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op
    await queryInterface.bulkDelete('Boats', {id: {[Op.in]: ["0a70658f-04e0-4be1-84ae-02656eb13406",
          "c3c31204-48ef-40b9-a890-f47708701526", "414503b3-7056-4674-a58f-0edcda2b3a37"]}}, {})
  }
};
