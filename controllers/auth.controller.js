var db = require('../db');
module.exports.login = function(req,res){
  res.render('auth/login');
}

module.exports.postLogin = function(req,res){
  var email = req.body.email;
  var pass = req.body.pass;
  var errors = [];
  var user = db.get('users').find({email:email}).value();
  if(!user){
    res.render('auth/login',{
      errors : ['User does not exits']
    });
    return;
  }
  if(user.password !== pass){
    res.render('auth/login',{
      errors : ['Wrong password']
    });
    return;
  }
  res.cookie('userId',user.id,{
    signed:true
  });
  res.redirect('/users');
}