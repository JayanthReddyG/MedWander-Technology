const { DataTypes } = require('sequelize');
const sequelize = require('../config');

// Sync the model with the database
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to database has been established successfully.');

        // Sync the model with the database
        await Form.sync(); // This ensures that the table exists and matches the model definition

        console.log('Models synchronized successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

const Form = sequelize.define('Form', {
    form_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    country_code: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{});
sequelize.sync().then(() => {
    console.log('Form  table created successfully!');

}).catch((error) => {
    console.error('Unable to create table : ', error);
});
module.exports = Form;
