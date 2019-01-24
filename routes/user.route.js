var express = require('express');
var router = express.Router();

var shortid = require('shortid');

var controller = require('../controllers/user.controller');

router.get('/',controller.index)


router.get('/search',controller.search);

router.get('/create',controller.create);

router.post('/create',controller.createPost);

router.get('/:id',controller.get);
module.exports = router;