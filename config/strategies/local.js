var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
var usermodel = require('mongoose').model('user');
module.exports = function(){
    passport.use(new LocalStrategy(function(username,password,done){
        usermodel.findOne({username:username},function(err,user){
            if(err){
                return done(err);
            }
            if(!user || !user.authenticate(password)){
                return done(null,false);
            }
            return done(null,user);
        })
    }))
}