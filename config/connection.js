// Jamie Morris
// Homework-11  Eat-Da-Burger!

// Requires mysql
var mysql = require("mysql");

var connection;

// Creates connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
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
};

// Error handling
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

// Test comment
module.exports = connection;