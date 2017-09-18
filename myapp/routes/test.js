var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Vous êtes sur le page about !');
});

module.exports = router;
