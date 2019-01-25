var express = require('express');
var router = express.Router();

var validate = require('../validate/user.create.js');
var controller = require('../controllers/user.controller');

router.get('/',controller.index);

router.get('/cookie',function(req, res, next){
  res.cookie('user-id',"123456");
  res.send('Okey');
});
router.get('/search',controller.search);

router.get('/create',controller.create);

router.post('/create',validate.createPost,controller.createPost);

router.get('/:id',controller.get);
module.exports = router;