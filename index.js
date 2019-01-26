var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route')
var productRoute = require('./routes/product.route');

app.set('view engine','pug');
app.set('views','views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser('abcdksjagjdl12345'));
app.use(express.static('public'));

app.use('/users',userRoute);
app.use('/auth',authRoute);
app.use('/product',productRoute);

app.get('/',function(req,res){
  res.render('index',function(){
  })
});

app.listen('3000',function(req,res){
  
});

