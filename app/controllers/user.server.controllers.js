var usermodel = require('mongoose').model('user');
exports.renderlogin = function(req,res,next){
    res.render('authen');
}
exports.signup = function(req,res,next){
    var user = new usermodel(req.body);
    user.provider = 'local';
    user.save(function(err){
        if(err){
            return res.redirect('/login');
        }
        req.login(user,function(err){
            if(err) return next(err);
            return res.redirect('/');
        });

    });
}
exports.logout = function(req,res,next){
    req.logout();
    res.redirect('/login');
}