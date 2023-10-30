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
const Colors = require('./colors')

const ProductColors = sequelize.define("product_colors", {
  ID: {
    type: DataTypes.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
  },
  PRODUCT_ID: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
  },
  COLOR_TABLE_ID: {
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

ProductColors.belongsTo(Colors , {foreignKey: "COLOR_TABLE_ID", as: "availableColors"});


module.exports = ProductColors;
