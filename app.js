var express = require('express');
var app = new express();
//设置handlebars试图引擎
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
app.set('port',process.env.PORT || 3000);
//设置static中间件
app.use(express.static(__dirname +"/public"));
//添加路由
app.get("/",function(req,res){
    //不需设置返回类型和状态码，试图引擎默认会返回text/html和状态码200
    res.render('home');
});

app.get("/about",function(req,res){
    res.render('about');
});
//定制404界面
app.use(function(req,res){
    res.status('404');
    res.render('404');
});
//定制500界面
app.use(function(err,req,res,next){
    console.log(err.stack);
    res.status('500');
    res.render('error');
});

app.listen(app.get('port'),function(){
    console.log("lalal");
});