var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type: String,
        required : true
    },
    author : {
        type: String,
        required: true
    },
    status : {
        type: Boolean,
        required: true
    },
    rating : {
        type: Number,
        required: false
    },
    url : {
        type: String,
        required: false
    },
    creatorid: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Book', BookSchema);