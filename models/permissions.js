
const { DataTypes } = require('sequelize')
const mysqlDB = require('../config/database')
const UserPermissionModel = require('./user_permissions')
const UserModel = require('./users')

const sequelize = mysqlDB;

const Permissions = sequelize.define(
    'permissions',
    {
        PERMISSION_ID: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true

        },
        NAME: {
            type: DataTypes.STRING(55),
            allowNull: false
        },
        IS_ACTIVE: {
            type: DataTypes.TINYINT,
            allowNull: false
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

UserPermissionModel.belongsTo(Permissions, { as: "UserPermissions", foreignKey: 'PERMISSION_TABLE_ID' });



module.exports = Permissions;