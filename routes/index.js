var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', cars: [1,2,3,4,5,6,6,7,7] });
});

module.exports = router;
