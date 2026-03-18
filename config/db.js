var mysql = require("mysql2");
var util = require("util");
require("dotenv").config();

var pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,

    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Promisify pool query
var exe = util.promisify(pool.query).bind(pool);

module.exports = exe;
