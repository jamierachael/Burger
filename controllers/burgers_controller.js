var express = require("express");
var burger = require("../controllers/burger.js");

var router = express.Router();

router.get("/", function (req, res) {
    cat.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});




router.post




module.exports = router;