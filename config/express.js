var express = require('express');
var app = express();
var bodyParser = require('body-parser');

module.exports = function(){
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.set('views','./app/views');
    app.set('view engine','pug');
    require('../app/routes/home.server.routes')(app);
    app.use('/css',express.static('./public/css'));
    app.use(express.static('public'));
    return app;
}