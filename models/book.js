var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
    name : {
        type : String,
        unique: true,
        required : true
    },
    description : {
        type: String,
        required : true
    }
});


module.exports = mongoose.model('Book', BookSchema);