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

const ProductImages = sequelize.define(
    'product_images',
    {
        PRODUCT_IMAGE_ID: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true

        },
        PRODUCT_ID:{
            type: DataTypes.INTEGER(55),
            allowNull: false
        },
        COLOR_ID:{
            type: DataTypes.INTEGER(155),
            allowNull: false
        },
        IMG_NAME:{
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



module.exports = ProductImages;