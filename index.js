var express = require('express');

var app = express();
app.set('view engine','pug');
app.set('views','views');

app.get('/',function(req,res){
  res.render('index',function(){
    console.log('jaslgjd');
  })
});

app.get('/users',function(req,res){
  res.render('users/index',{users: [
    {name:'Tung',age:14},
    {name:"Manh",age: 16},
    {name:"Trang",age: 16},
  ]});
})

app.listen('3000',function(){
  console.log('Hello world');
});

