/**
 * @description      :
 * @author           : DHANUSH
 * @group            :
 * @created          : 14/10/2023 - 22:18:12
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 14/10/2023
 * - Author          : DHANUSH
 * - Modification    :
 **/

const { DataTypes } = require("sequelize");
const mysqlDB = require("../config/database");
const sequelize = mysqlDB;
const ProductSizes = require("./product_sizes");
const BrandsModel = require("./brands");
const ProductColors = require("./product_colors");
const AllProducts = require('../models/all_products')
const Colors = require('./colors')
const ProductImagesModel = require('./product_images')

const Shirts = sequelize.define("shirts", {
  SHIRT_ID: {
    type: DataTypes.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
  },
  BRAND_TABLE_ID: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
  },
  NAME: {
    type: DataTypes.STRING(255),
    allowNullL: false,
  },
  TYPE: {
    type: DataTypes.STRING(55),
    allowNull: false,
  },
  MATERIAL: {
    type: DataTypes.STRING(55),
    allowNull: false,
  },
  SLEEVE: {
    type: DataTypes.STRING(55),
    allowNull: false,
  },
  FIT: {
    type: DataTypes.STRING(55),
    allowNull: false,
  },
  QUANTITY: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
  },
  CREATED_BY: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

Shirts.belongsTo(BrandsModel, { foreignKey: "BRAND_TABLE_ID" });
Shirts.hasMany(ProductSizes, { foreignKey: "SHIRT_TABLE_ID" });
Shirts.hasMany(ProductColors, { foreignKey: "SHIRT_TABLE_ID" });

Shirts.hasMany(ProductColors, {
  foreignKey: "SHIRT_TABLE_ID",
  as: "availableColors",
});

Shirts.hasOne(AllProducts, { foreignKey: "PRODUCT_ID", as: 'images' })


AllProducts.belongsToMany(Colors, {
  through: ProductImagesModel,
  foreignKey: "PRODUCT_ID",
  as: 'productimages'
});


Colors.belongsToMany(AllProducts, {
  through: ProductImagesModel,
  foreignKey: "COLOR_ID",
  as: 'productimages'
});



module.exports = Shirts;
