'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('address', [
      {
        region: "Buxoro",
        district: "Buxoro shahri",
      },
      {
        region: "Buxoro",
        district: "G'ijduvon tuman",
      },
      {
        region: "Buxoro",
        district: "Shofirkon tuman",
      },
     ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('address', null, {});
    
  }
};
