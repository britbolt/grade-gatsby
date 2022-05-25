const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Grade extends Model {}

Grade.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true

        },
        student_id: {
            type: DataTypes.INTEGER,
            references: {
                model: student,
                key: id
            }
        },
        subject_id: {
            type: DataTypes.INTEGER,
            references: {
                model: subject,
                key: id 
            }
        },
        grade: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'grade'
    }
);

module.exports = Grade;