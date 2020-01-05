var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  //Port
  port: 3306,
  // Username
  user: "root",
  // Password
  password: "Cheeseme1",
  // DataBase
  database: "burgers_db"
});

// connection.connect();

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connection;