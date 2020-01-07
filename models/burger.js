// Jamie Morris
// Homework-11  Eat-Da-Burger!
// Modified from in class "CatsApp" example
const orm = require("../config/orm.js");

// Select ALL 
const burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // Insert One
    insertOne: function (column, value, cb) {
        orm.insertOne("burgers", column, value, function (res) {
            cb(res);
        })
    },
    //Update One 
    updateOne: function (id, cb) {
        orm.updateOne("burgers", "devoured", true, id, function (res) {
            cb(res);
        })
    },
    // Delete 
    // Not working
    // delete: function (id, cb) {
    //     orm.deleteOne("burgers", id, function (res) {
    //         cb(res);
    //     })
    // }
};

module.exports = burger;
