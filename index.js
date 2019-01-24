var express = require('express');
var app = express();

var shortid = require('shortid')
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
  res.render('users/index',{users:db.get('users').value()});
})

app.get('/user/:id',function(req,res){
  var id = req.params.id;
  var user = db.get('users').find({id:id}).value();
  
  res.render('users/view',{user:user});
});

app.get('/users/search',function(req,res){
  var q = req.query.q;
  var filterUsers = db.get('users').value().filter(function(user){
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  
  res.render('users/index',{users:filterUsers});
});

app.get('/users/create',function(req,res){
  res.render('users/create');
});

app.post('/users/create',function(req,res){
  req.body.id = shortid.generate();
  db.get('users').push(req.body).write();
  res.redirect('/users');
});


app.listen('3000',function(){
  console.log('Hello world');
});

