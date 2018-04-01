var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  	//展示登陆页面
	res.render('login', {title: '登陆'});
});


router.post('/post', function(req, res, next) {
  	//登陆操作

  	//1. 接受参数
  	var username = req.body.username;
  	var password = req.body.password;
  	var remember = req.body.remember;
	

  	//2. 验证参数
  	if(username == 'admin' && password == '123456') {
  		//3. session 写入
  		console.log('成功登陆');

  		//4. 跳转页面 主页

  		res.render('index', {title: '主页'});

  	} else {

  		// 回到登陆页面，提示用户名密码错误
  		res.redirect('/login');
  	}

	
});




module.exports = router;
