'use strict';

const Sequelizerc = require("../../../.sequelizerc");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      provider: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATA,
        allowNull: false,
      },
      update_at: {
        type: Sequelize.DATA,
        allowNull: false,
      }
     })

  },

  down: async queryInterface => {
    return queryInterface.dropTable('users')
  }
};
