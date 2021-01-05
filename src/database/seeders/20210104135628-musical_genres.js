'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert('Musicalgenres', [{
        id: 1,
        name: "Open Format",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        name: "House",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        name: "Deep House",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 4,
        name: "Electro",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 5,
        name: "Funk",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 6,
        name: "Hip Hop",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 7,
        name: "Rap",
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Musicalgenres', null, {});
  }
};