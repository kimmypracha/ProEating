var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    createdBy : {
        type: String
    },
    createdAt : {
        type: Date
    },
    description : {
        type: String
    },
    liked_number: {
        type: Number,
        default: 0
    }
})