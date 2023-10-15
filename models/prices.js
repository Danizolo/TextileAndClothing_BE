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
const ManufacturerModel = require("./manufacturers");


const Prices = sequelize.define("prices", {
  PRICE_ID: {
    type: DataTypes.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
  },
  BRAND_ID: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
  },
  MANUFACTURER_ID: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
  },
  BASE_PRICE: {
    type: DataTypes.FLOAT,
    primaryKey: true,
  },
  PROFIT_PERCENTAGE: {
    type: DataTypes.FLOAT,
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



module.exports = Prices;
