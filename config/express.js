var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
module.exports = function(){
    app.use(session({
        secret: 'jfklsd;afjdksfhksdjl;fhds',
        resave: false,
        saveUninitialized: true
    }));
    app.use(passport.initialize())
    app.use(passport.session());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.set('views','./app/views');
    app.set('view engine','pug');
    require('../app/routes/home.server.routes')(app);
    require('../app/routes/user.server.routes')(app);
    app.use('/css',express.static('./public/css'));
    app.use(express.static('public'));
    return app;
}