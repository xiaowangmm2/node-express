var express = require('express');
var app = new express();
//����handlebars��ͼ����
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
app.set('port',process.env.PORT || 3000);
//����static�м��
app.use(express.static(__dirname +"/public"));
//���·��
app.get("/",function(req,res){
    //�������÷������ͺ�״̬�룬��ͼ����Ĭ�ϻ᷵��text/html��״̬��200
    res.render('home');
});

app.get("/about",function(req,res){
    res.render('about');
});
//����404����
app.use(function(req,res){
    res.status('404');
    res.render('404');
});
//����500����
app.use(function(err,req,res,next){
    console.log(err.stack);
    res.status('500');
    res.render('error');
});

app.listen(app.get('port'),function(){
    console.log("lalal");
});