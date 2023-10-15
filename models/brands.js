/**
    * @description      : 
    * @author           : DHANUSH
    * @group            : 
    * @created          : 14/10/2023 - 22:24:31
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 14/10/2023
    * - Author          : DHANUSH
    * - Modification    : 
**/

const { DataTypes } = require('sequelize')
const mysqlDB = require('../config/database')
const ShirtsModel = require('./shirts')

const sequelize = mysqlDB;

const Brands = sequelize.define(
    'brands',
    {
        BRAND_ID: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true

        },
        BRAND_NAME:{
            type: DataTypes.STRING(55),
            allowNull: false
        },
        MANUFACTURER:{
            type: DataTypes.STRING(155),
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




module.exports = Brands;