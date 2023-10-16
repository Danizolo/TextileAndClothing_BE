



const { DataTypes } = require('sequelize')
const mysqlDB = require('../config/database')

const sequelize = mysqlDB;

const LoginHistories = sequelize.define(
    'login_histories',
    {
        LOGIN_HISTORY_ID: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        USER_ID: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        DATE: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        LOGIN_AT: {
            type: DataTypes.TIME,
            allowNull: true
        },
        LOGOUT_AT: {
            type: DataTypes.DATE,
            allowNull: true
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




module.exports = LoginHistories;