const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("kimo_courses", "root", "prajwal@123", {
  host: "localhost",
  dialect: "mysql",
});

const Course = sequelize.define("Course", {
  name: { type: DataTypes.STRING, allowNull: false },
  date: { type: DataTypes.DATE, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  domain: { type: DataTypes.STRING, allowNull: false },
});

const Chapter = sequelize.define("Chapter", {
  name: { type: DataTypes.STRING, allowNull: false },
  text: { type: DataTypes.TEXT, allowNull: false },
  ratings: { type: Sequelize.INTEGER, defaultValue: 0 },
});

Course.hasMany(Chapter, { as: "Chapters" });
Chapter.belongsTo(Course);

module.exports = { sequelize, Course, Chapter };
