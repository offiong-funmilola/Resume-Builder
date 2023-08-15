"use strict";

const secrets = [
  "cv_id",
  "createdAt",
  "updatedAt",
  "deletedAt",
];

module.exports = function(sequelize, DataTypes) {
  const Education = sequelize.define(
    "education",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      cv_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      school: {
        type: DataTypes.STRING,
      },
      degree: {
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
    },
    {
      timestamps: true,
      paranoid: true,
    }
  );

  Education.prototype.purge = function() {
    const clean = {};
    for (const key of Object.keys(this.dataValues)) {
      if (!secrets.includes(key)) {
        clean[key] = this.dataValues[key];
      }
    }
    return clean;
  };

  return Education;
};