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
exports.createpost = function(req,res,next){
    var newpost = new post(req.body);
    newpost.save(function(err,post){
        if(err){
            next(err);
        }else{
            console.log(post);
            //res.json(post);
            res.redirect('/');
        }
    })
}