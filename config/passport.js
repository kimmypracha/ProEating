var passport = require('passport')
var mongoose = require('mongoose')

module.exports = function(){
    var usermodel = mongoose.model('user');

    passport.serializeUser(function(user,done){
        done(null,user.id);
    });

    passport.deserializeUser(function(id,done){
        usermodel.findOne({_id:id},'-password -salt',function(err,user){
            done(err,user);
        })
    });
    require('./strategies/local.js')();
}