var express = require('express');
var app = express();


var bodyParser = require('body-parser');

app.set('view engine','pug');
app.set('views','views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)
db.defaults({users:[]}).write();

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

app.get('/users/create',function(req,res){
  res.render('users/create');
});

app.post('/users/create',function(req,res){
  users.push(req.body);
  res.redirect('/users');
});


app.listen('3000',function(){
  console.log('Hello world');
});

