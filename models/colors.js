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
const sequelize = mysqlDB;
const ShirtModel = require('./shirts')
const AllProducts = require('./all_products')
const ProductImagesModel = require('./product_images')


const Colors = sequelize.define(
    'colors',
    {
        COLOR_ID: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true

        },
        DEFAULT_COLOR:{
            type: DataTypes.STRING(55),
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

// Colors.hasMany(ProductImagesModel, {foreignKey: 'COLOR_ID' });


module.exports = Colors;