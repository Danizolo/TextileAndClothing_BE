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
const ProductSizes = require('./product_sizes')





const Sizes = sequelize.define("sizes", {
  SIZE_ID: {
    type: DataTypes.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
  },
  DEFAULT_SIZE: {
    type: DataTypes.STRING(5),
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




module.exports = Sizes;
