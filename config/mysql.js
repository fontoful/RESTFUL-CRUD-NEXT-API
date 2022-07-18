const { Sequelize } = require('sequelize');

const database = process.env.MYSQL_DATABASE;
const user = process.env.MYSQL_USER;
const password = process.env.PASSWORD;
const host = process.env.HOST;

const sequelize = new Sequelize(database, user, password, {
  host,
  dialect: 'mysql',
});

const dbConnectMySql = async () => {
  try {
    await sequelize.authenticate()
    console.log('MYSQL Conexión correcta');
  } catch (error) {
    console.log('MYSQL Error de conexión', e);
  }
}

module.exports = {
  sequelize,
  dbConnectMySql
}