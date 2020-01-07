// Jamie Morris
// Homework-11  Eat-Da-Burger!

// Requires mysql
var mysql = require("mysql");

// Creates connection
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


// Error handling
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connection;