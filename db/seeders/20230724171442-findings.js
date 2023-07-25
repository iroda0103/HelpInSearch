"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("findings", [
      {
        name: "Telefon",
        description: "Yo'qolgan telefon",
        type: "found",
        user_id: 1,
        address_id: 1,
        img: "phone.jpg",
        address_addition: "123-kvartira",
      },
      {
        name: "noutbuk",
        description: "Noutbuk topildi",
        type: "lost",
        user_id: 2,
        address_id: 2,
        img: "laptop.jpg",
        address_addition: "Apt 456",
      },
      {
        name: "hamyon",
        description: "Yo'qotilgan hamyon",
        type: "lost",
        user_id: 3,
        address_id: 2,
        img: "wallet.jpg",
        address_addition: "",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('findings', null, {});
  },
};
