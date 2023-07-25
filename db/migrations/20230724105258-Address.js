'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('address', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
     
      region: {
        type: Sequelize.ENUM,
        values: ["Andijon", "Buxoro", "Farg'ona", "Jizzax", "Xorazm", "Namangan", "Navoiy", "Qashqadaryo", "Qoraqalpog'iston", "Samarqand", "Sirdaryo", "Surxondaryo", "Toshkent", "Toshkent shahri"],
        defaultValue: "Buxoro",
        allowNull:false
      },
      district: {
        type: Sequelize.ENUM,
        values: ["Buxoro shahri", "G'ijduvon tuman", "Jondor tuman", "Kogon tuman", "Qorako'l tuman", "Qorovulbozor tuman", "Romitan tuman", "Shofirkon tuman", "Vobkent tuman", "Buxoro viloyati"],
        defaultValue: "Shofirkon tuman",
        allowNull:false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('address');
  }
};
