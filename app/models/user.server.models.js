var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    username : {
        type: String,
        unique : true,
        required: 'Username is required',
        trim : true
    },
    password : {
        type: String,
        validate: [
            function(password){
                return password && password.length >= 3;
            }, 'Password must be at least 3 characters'
        ]
    },
    salt: {
        type: String
    },
    provider:{
        type: String,
        required: "Provider is required"
    },
    providerId:{
        type: String
    },
    providerData:{},
    email: {
        type: String
    }
});

UserSchema.methods.hashPassword = function(password){
    // Pbkdf2 = Password-Based key derivative function 2 
    return  crypto.pbkdf2Sync(password,this.salt,10000,64,'sha1').toString('base64');
};

UserSchema.methods.authenticate = function(password){
    return this.Password === this.hashPassword(password);
};
UserSchema.pre('save', function(next){
    console.log("This is this :     " + this);
    console.log("This is authenticate :      " + this.authenticate);
    if(this.Password){
        this.salt  = new Buffer(crypto.randomBytes(16).toString('base64'),'base64');
        this.Password = this.hashPassword(this.Password);
    }
    next();
});
mongoose.model('user',UserSchema,'user');