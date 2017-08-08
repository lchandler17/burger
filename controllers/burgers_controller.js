var express = require('express');
var router = express.Router();

var burgers = require('../models/burger.js');

router.get("/", function(req, res) {
  burgers.all(function(data) {
  	var hbsObject = {
  		burgers: data
  	};
  	res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burgers.create([
  		"burger_name", "devoured"
  	], [
  		req.body.burger_name, 0
  	], function() {
  		res.redirect("/");
  	});
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burgers.update({
  	devoured: req.body.devoured
  }, condition, function() {
  	res.redirect("/");
  });
});

module.exports = router;