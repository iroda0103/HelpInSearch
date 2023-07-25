'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("findings", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.ENUM,
        values: ["found", "lost"],
        allowNull: false,
      },
      user_id:{
        type:Sequelize.INTEGER,
        references:{
          model:"users",
          key:"id"
        },
        onDelete:"CASCADE",
        allowNull:false
      },
      address_id:{
        type:Sequelize.INTEGER,
        references:{
          model:"address",
          key:"id"
        },
        onDelete:"SET NULL",
        allowNull:false
      },
      img:{
        type:Sequelize.STRING,
        allowNull:false
      },
      address_addition:{
        type:Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("NOW()")
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("NOW()"),
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('findings');
    
  }
};
