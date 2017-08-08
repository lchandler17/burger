var express = require('express');
var router = express.Router();

var burger = require('../models/burger.js');

router.get("/", function(req, res) {
  connection.query("SELECT * FROM burgers;", function(err, data) {
    if (err) {
      throw err;
    }

    res.render("index", { burgers: data });

  });
});

router.post("/", function(req, res) {
  connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger_name], function(err, result) {
    if (err) {
      throw err;
    }
    res.redirect("/");
  });
});

router.put("/", function(req, res) {
  connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [
      req.body.devoured, req.body.id
    ], function(err, result) {
      if (err) {
        throw err;
      }
      res.redirect("/");
    });
});