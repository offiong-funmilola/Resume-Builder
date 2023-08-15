"use strict";

let Sequelize
if (process.env.NODE_ENV === "production") {
  Sequelize = require("sequelize-cockroachdb");
} else {
  Sequelize = require("sequelize");
}

// const Config = require("../config/config")[process.env.NODE_ENV];

let sequelize = null;

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

exports.Connect = () => {
  console.log(process.env.DB_HOST, process.env.DB_PORT, process.env.DB_TYPE)
  if (sequelize === null) {
    if (process.env.NODE_ENV === "production") {
      sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
        dialect: process.env.DB_TYPE,
        dialectOptions: {cockroachdbTelemetryDisabled : true },
        logging: false,
      });
    } else {
      sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
        dialect: process.env.DB_TYPE,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        logging: console.log,
      });
    }
  }

  // if (process.env.NODE_ENV === "production" && !Sequelize.supportsCockroachDB) {
  //   throw new Error("CockroachDB dialect for Sequelize not installed");
  // }  

  console.log("Environment: " + process.env.NODE_ENV);
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection to database successfull");
    })
    .catch(err => {
      console.log("Unable to connect to the database", err);
    });

  const DB = {
    USER: require("../models/User")(sequelize, Sequelize.DataTypes),
    CV: require("../models/CV")(sequelize, Sequelize.DataTypes),
    PROFILE: require("../models/Profile")(sequelize, Sequelize.DataTypes),
    EXPERIENCE: require("../models/Experience")(sequelize, Sequelize.DataTypes),
    EDUCATION: require("../models/Education")(sequelize, Sequelize.DataTypes),
    ACTIVITIES: require("../models/Activities")(sequelize, Sequelize.DataTypes),
    COURSES: require("../models/Courses")(sequelize, Sequelize.DataTypes),
    INTERSHIPS: require("../models/Internships")(sequelize, Sequelize.DataTypes),
    LANGUAGES: require("../models/Languages")(sequelize, Sequelize.DataTypes),
    REFERENCES: require("../models/References")(sequelize, Sequelize.DataTypes),
    SKILLS: require("../models/Skills")(sequelize, Sequelize.DataTypes),
    SOCIAL: require("../models/Social")(sequelize, Sequelize.DataTypes),

    sequelize: sequelize,
    SEQUELIZE: Sequelize,
  };

  // User and Card association
  DB.USER.hasMany(DB.CV, {
    foreignKey: "user_id",
    sourceKey: "id",
  });
  DB.CV.hasMany(DB.PROFILE, {
    foreignKey: "cv_id",
    sourceKey: "id",
  });

  DB.PROFILE.belongsTo(DB.CV, {
    foreignKey: "cv_id",
    sourceKey: "id",
  });

  DB.CV.hasMany(DB.EXPERIENCE, {
    foreignKey: "cv_id",
    sourceKey: "id",
  });
  DB.EXPERIENCE.belongsTo(DB.CV, {
    foreignKey: "cv_id",
    sourceKey: "id",
  });

  DB.CV.hasMany(DB.EDUCATION, {
    foreignKey: "cv_id",
    sourceKey: "id",
  });
  DB.EDUCATION.belongsTo(DB.CV, {
    foreignKey: "cv_id",
    sourceKey: "id",
  });

  DB.CV.hasMany(DB.COURSES, {
    foreignKey: "cv_id",
    sourceKey: "id",
  });
  DB.COURSES.belongsTo(DB.CV, {
    foreignKey: "cv_id",
    sourceKey: "id",
  });

  DB.CV.hasMany(DB.ACTIVITIES, {
    foreignKey: "cv_id",
    sourceKey: "id",
  });
  DB.ACTIVITIES.belongsTo(DB.CV, {
    foreignKey: "cv_id",
    sourceKey: "id",
  });

  DB.CV.hasMany(DB.INTERSHIPS, {
    foreignKey: "cv_id",
    sourceKey: "id",
  });
  DB.INTERSHIPS.belongsTo(DB.CV, {
    foreignKey: "cv_id",
    sourceKey: "id",
  });

  DB.CV.hasMany(DB.LANGUAGES, {
    foreignKey: "cv_id",
    sourceKey: "id",
  });
  DB.LANGUAGES.belongsTo(DB.CV, {
    foreignKey: "cv_id",
    sourceKey: "id",
  });

  DB.CV.hasMany(DB.REFERENCES, {
    foreignKey: "cv_id",
    sourceKey: "id",
  });
  DB.REFERENCES.belongsTo(DB.CV, {
    foreignKey: "cv_id",
    sourceKey: "id",
  });

  DB.CV.hasMany(DB.SKILLS, {
    foreignKey: "cv_id",
    sourceKey: "id",
  });
  DB.SKILLS.belongsTo(DB.CV, {
    foreignKey: "cv_id",
    sourceKey: "id",
  });

  DB.CV.hasMany(DB.SOCIAL, {
    foreignKey: "cv_id",
    sourceKey: "id",
  });
  DB.SOCIAL.belongsTo(DB.CV, {
    foreignKey: "cv_id",
    sourceKey: "id",
  });

  return DB;
};