const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Subject = require("./Subject");
const Student = require("./Student");

class Grade extends Model {}

Grade.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    grade: {
      type: DataTypes.INTEGER,
    },
    student_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Student,
        key: "id",
      },
    },
    subject_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Subject,
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "grade",
  }
);

module.exports = Grade;
