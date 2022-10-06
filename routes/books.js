var express = require("express");
var router = express.Router();
let book = require("../data.json");

/* GET books listing. */
router.get("/", function (req, res, next) {
  res.render("books", { author: book[0].author, title: book[0].title });
});

module.exports = router;
