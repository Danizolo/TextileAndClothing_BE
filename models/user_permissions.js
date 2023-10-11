
const { DataTypes } = require('sequelize')
const mysqlDB = require('../config/database')

const sequelize = mysqlDB;

const UserPermissions = sequelize.define(
    'user_permissions',
    {
        USER_PERMISSION_ID: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true

        },
        USER_TABLE_ID: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        PERMISSION_TABLE_ID: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            references: {
                model: 'permissions',
                key: 'PERMISSION_ID'
            },
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




module.exports = UserPermissions;