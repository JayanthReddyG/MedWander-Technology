const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dynamic_forms_db', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    password:"abc12345",
});

module.exports = sequelize;