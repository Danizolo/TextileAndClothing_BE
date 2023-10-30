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

const { DataTypes } = require("sequelize");
const mysqlDB = require("../config/database");
const sequelize = mysqlDB;
const Sizes = require('./sizes')

const ProductSizes = sequelize.define("product_sizes", {
  ID: {
    type: DataTypes.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
  },
  PRODUCT_ID: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
  },
  SIZE_TABLE_ID: {
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

ProductSizes.belongsTo(Sizes , {foreignKey: "SIZE_TABLE_ID", as: "availableSizes"});

module.exports = ProductSizes;
