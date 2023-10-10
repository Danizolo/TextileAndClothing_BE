
const { DataTypes } = require('sequelize')
const mysqlDB = require('../config/database')

const sequelize = mysqlDB;

const User = sequelize.define(
    'users',
    {
        USER_ID: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true

        },
        NAME: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        PASSWORD: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        CURRENT_PASSWORD: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        MAIL: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        PHONE_NUMBER: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        AGE: {
            type: DataTypes.TINYINT(4),
            allowNull: false
        },
        AADHAR: {
            type: DataTypes.INTEGER(15),
            allowNull: false
        },
        USER_TYPE: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        IS_ADMIN: {
            type: DataTypes.TINYINT,
        },
        IS_ACTIVE: {
            type: DataTypes.TINYINT,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }

    }
)




module.exports = User;