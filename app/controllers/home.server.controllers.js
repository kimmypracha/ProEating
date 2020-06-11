var post = require('mongoose').model('post');
exports.render = function(req,res,next){
    post.find({},function(err,doc){
        if(err){
            next(err);
        }else{
        console.log(doc);
        res.render('home',{
            posts: doc
        });
    }
    })
}