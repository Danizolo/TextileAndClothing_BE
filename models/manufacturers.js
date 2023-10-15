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

const { DataTypes } = require("sequelize");
const mysqlDB = require("../config/database");
const sequelize = mysqlDB;
const BrandsModel = require("./brands");
const PriceModel = require("./prices");

const Manufacturers = sequelize.define("manufacturers", {
  MANUFACTURER_ID: {
    type: DataTypes.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
  },
  MANUFACTURER_NAME: {
    type: DataTypes.STRING(255),
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



module.exports = Manufacturers;
