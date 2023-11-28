require("dotenv").config()

const knex = require("knex")({
    client: "pg",
    connection: {
        host: process.env.DB_HOST || "localhost",
        port: process.env.DB_PORT || 5432,
        user: process.env.DB_USER || "postgres",
        password: process.env.DB_PASS || "123456",
        database: process.env.DB_NAME || "pdv"
    }
});

module.exports = knex

