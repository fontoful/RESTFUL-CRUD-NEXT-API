const { Sequelize } = require('sequelize');

const database = process.env.MYSQL_DATABASE;
const user = process.env.MYSQL_USER;
const password = process.env.PASSWORD;
const host = process.env.HOST;

const sequelize = new Sequelize(database, user, password, {
  host,
  dialect: 'mysql',
});

module.exports = {
  sequelize
}