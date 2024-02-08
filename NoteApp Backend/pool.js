const mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  password: "Pankaj1984@",
  user: "root",
  database: "noteapp",
  connectionLimit: 100,
});

module.exports = pool;
