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
    email: {
        type: String
    }
})