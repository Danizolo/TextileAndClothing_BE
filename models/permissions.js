/**
    * @description      : 
    * @author           : DHANUSH
    * @group            : 
    * @created          : 14/10/2023 - 17:38:17
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 14/10/2023
    * - Author          : DHANUSH
    * - Modification    : 
**/

const { DataTypes } = require('sequelize')
const mysqlDB = require('../config/database')
const UserPermissionModel = require('./user_permissions')

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