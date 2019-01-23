var express = require('express');

var app = express();
app.set('view engine','pug');
app.set('views','views');

var users =  [
  {name:'Tung',age:14},
  {name:"Manh",age: 16},
  {name:"Trang",age: 16},
];

app.get('/',function(req,res){
  res.render('index',function(){
    console.log('jaslgjd');
  })
});

app.get('/users',function(req,res){
  res.render('users/index',{users:users});
})

app.get('/users/search',function(req,res){
  var q = req.query.q;
  var filterUsers = users.filter(function(user){
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  
  res.render('users/index',{users:filterUsers});
});
app.listen('3000',function(){
  console.log('Hello world');
});

