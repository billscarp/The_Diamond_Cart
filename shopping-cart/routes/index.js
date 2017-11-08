var express = require('express');
var router = express.Router();

/* GET home page. Render functions says sent back response to browswer containing html code of index file and use data between curly brackets  */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Your Shopping Cart' });
});

module.exports = router;
