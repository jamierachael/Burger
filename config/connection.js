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
    host: "ctgplw90pifdso61.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    //Port
    port: 3306,
    // Username
    user: "yc7a2rrhzrtwpqir",
    // Password
    password: "li2fndl8246lz1mi",
    // DataBase
    database: "qs7dcd4dvlzacibl"
  });
};

// Error handling
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

// Test comment 
module.exports = connection;