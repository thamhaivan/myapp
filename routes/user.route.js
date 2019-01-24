var express = require('express');
var router = express.Router();
var db = require('../db');
var shortid = require('shortid');


router.get('/',function(req,res){
  res.render('users/index',{users:db.get('users').value()});
})


router.get('/search',function(req,res){
  var q = req.query.q;
  var filterUsers = db.get('users').value().filter(function(user){
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  
  res.render('users/index',{users:filterUsers});
});

router.get('/create',function(req,res){
  res.render('users/create');
});

router.post('/create',function(req,res){
  req.body.id = shortid.generate();
  db.get('users').push(req.body).write();
  res.redirect('/users');
});

router.get('/:id',function(req,res){
  var id = req.params.id;
  var user = db.get('users').find({id:id}).value();
  
  res.render('users/view',{user:user});
});
module.exports = router;