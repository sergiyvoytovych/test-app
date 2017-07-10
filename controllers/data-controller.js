var Book = require('../models/book');

module.exports.getBooks = function (req, res) {
    Book.find({}, function (err,books) {
        if (err){
            res.status(500);
        }

        res.json({data: books})

    });
}

module.exports.postBook = function (req,res) {
    var book = new Book;
    book.name = req.body.name;
    book.description = req.body.description;

    book.save(function (err) {
        if (err) {
            res.status(500).send('Cud not save the book');
        }
        else {
            res.status(200).send('Book added!');
        }
    })
}