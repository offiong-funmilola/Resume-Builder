'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, { DataTypes }) {
    return queryInterface.createTable("experience", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      cv_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      employer: {
        type: DataTypes.STRING,
      },
      start: {
        type: DataTypes.STRING,
      },
      end: {
        type: DataTypes.STRING,
      },
      current: {
        type: DataTypes.BOOLEAN,
      },
      city: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      deletedAt: {
        type: DataTypes.DATE,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable("experience");
  }
};
