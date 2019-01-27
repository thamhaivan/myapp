<<<<<<< HEAD
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route')
var productRoute = require('./routes/product.route');
var mongoose = require('mongoose');
=======
var app = require('express');
var router = express.Router();
console.log("JLGJDJG");
app.set('view engine','views');
>>>>>>> 5668fccf5c5df9c376c73b59a8a90b629f7c0236

