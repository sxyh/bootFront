var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  var username = req.session.username;
  res.render('index', { title: '主页' , user: username});
});

module.exports = router;
