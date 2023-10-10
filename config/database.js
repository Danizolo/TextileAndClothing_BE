const Sequelize = require('sequelize')

const mysqlDataBase = 'textile_and_clothing';
const mysqlUser = 'root';
const mysqlPassWord = '';

const mysqlDbConnection = new Sequelize(mysqlDataBase, mysqlUser, mysqlPassWord, {
  host: 'localhost',
  dialect: 'mysql',
  dialectOptions: {
    useUTC: false, // for reading from database
  },
  timezone: '+05:30'
});


try {
  mysqlDbConnection.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = mysqlDbConnection;

