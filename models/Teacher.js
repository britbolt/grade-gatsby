const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Teacher extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
      }
}

Teacher.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (teacher) => {
        teacher.password = await bcrypt.hash(teacher.password, 10);
        return teacher;
      },
      beforeUpdate: async (teacher) => {
        teacher.password = await bcrypt.hash(teacher.password, 10);
        return teacher;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "teacher",
  }
);

module.exports = Teacher;
