/* -Configuracion de la base de datos- */
const dontenv = require('dotenv').config();

const config = {
    db: {
        host: process.env.HOSTNAME,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
    },
    listPerPage: 10
};

module.exports = config;