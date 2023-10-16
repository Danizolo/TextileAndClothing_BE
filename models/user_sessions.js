



const { DataTypes } = require('sequelize')
const mysqlDB = require('../config/database')

const sequelize = mysqlDB;

const UserSessions = sequelize.define(
    'user_sessions',
    {
        USER_SESSION_ID: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true

        },
        USER_ID: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        IS_LOGGING_IN: {
            type: DataTypes.TINYINT,
            allowNull: false,
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




module.exports = UserSessions;