'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        first_name: 'John',
        last_name: 'Doe',
        username: 'johndoe',
        password: '123456',
        phone: '1234567890',
        email: 'johndoe@example.com',
        role:'admin',
      },
      {
        first_name: 'Jane',
        last_name: 'Smith',
        username: 'janesmith',
        password: 'abcdef',
        phone: '9876543210',
        email: 'janesmith@example.com',
        role:'admin'
      },
      {
        first_name: 'Bob',
        last_name: 'Johnson',
        username: 'bobjohnson',
        password: 'qwerty',
        phone: '4567891230',
        email: 'bobjohnson@example.com',
        role:'user'
      },
      {
        first_name: 'Alice',
        last_name: 'Brown',
        username: 'alicebrown',
        password: 'password',
        phone: '1357924680',
        email: 'alicebrown@example.com',
        role:'user'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
     
  }
};
