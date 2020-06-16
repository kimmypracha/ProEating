var mongoose = require('./config/mongoose');
var express = require('./config/express');
var passport = require('./config/passport');
var db = mongoose();
var app = express();
var passport = passport();
var port = process.env.PORT || 8080;
app.listen(port,function(){
    console.log("App is running at port "+ port);
});