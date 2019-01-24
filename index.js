var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var userRoute = require('./routes/user.route');

app.set('view engine','pug');
app.set('views','views');
app.use(express.static('public'))
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.use('/users',userRoute);

app.get('/',function(req,res){
  res.render('index',function(){
  })
});




app.listen('3000',function(req,res){
  
});

