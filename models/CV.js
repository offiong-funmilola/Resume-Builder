"use strict";

const secrets = [
  "user_id",
  "status",
  "createdAt",
  "updatedAt",
  "deletedAt",
];

module.exports = function(sequelize, DataTypes) {
  const CV = sequelize.define(
    "cvs",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
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
    },
    {
      timestamps: true,
      paranoid: true,
    }
  );

  CV.prototype.purge = function() {
    const clean = {};
    for (const key of Object.keys(this.dataValues)) {
      if (!secrets.includes(key)) {
        clean[key] = this.dataValues[key];
      }
    }
    return clean;
  };

  return CV;
};