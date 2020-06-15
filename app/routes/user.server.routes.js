var user = require('../controllers/user.server.controllers.js');
var passport = require('passport');

module.exports = function(app){
    app.route('/login')
       .get(user.renderlogin)
       .post(function(req,res,next){
           passport.authenticate('local',{
               successRedirect: '/',
               failureRedirect: '/login',
               failureFlash: false
           })(req,res);
       });
    app.route('/signup')
       .post(user.signup);
    app.route('/logout')
       .get(user.logout); // just to debug first
}