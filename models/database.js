require('dotenv').config()
const { Sequelize, Model } = require('sequelize');

require('dotenv').config();
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mariadb'
});

const connect = async ()=>{
    try {
        const result = await db.authenticate();
        console.log("Conenct DB Success")
    } catch (error) {
        console.log("Connect DB Failed")
    }
  
}

connect();

module.exports = db;