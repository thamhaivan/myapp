module.exports.createPost = function(req,res,next){
  var errors = [];
  if(!req.body.name){
    errors.push('Nam is required');
  }
  if(!req.body.phone){
    errors.push('Phone is required');
  }
  
  if(errors.length){
    res.render('users/create',{
      errors:errors,
      values:req.body
    });
    return;
  }
  
  next();
}