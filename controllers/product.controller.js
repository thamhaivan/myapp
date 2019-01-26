var db = require('../db');
module.exports.lists = function(req,res){
  var page = parseInt(req.query.page) || 1;
  var perPage = 9;
  var start = (page - 1) * perPage;
  var end = page * perPage; 
  var products = db.get('products').value().slice(start,end);
  res.render('products/lists',{
    products:products
  });
}