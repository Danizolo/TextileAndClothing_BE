


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
const Colors = require('./colors')
const ProductImagesModel = require('./product_images')

const AllProducts = sequelize.define(
    'all_products',
    {
        ALL_PRODUCT_ID: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true

        },
        PRODUCT_ID:{
            type: DataTypes.INTEGER(22),
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



module.exports = AllProducts;