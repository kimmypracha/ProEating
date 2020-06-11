var post = require('mongoose').model('post');
exports.render = function(req,res){
    res.render('home',{
        posts : post.find({}) 
    });
}