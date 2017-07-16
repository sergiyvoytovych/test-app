var http = require('http');
var path = require('path');

var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

var app = express();
var secureRoutes = express.Router();

var dataController = require('./controllers/data-controller');
var authenticateController = require('./controllers/authenticate-controller');

process.env.SECRET = "supersecretkey";

var config = require('./config/config');
config.setConfig();

mongoose.connect(process.env.MONGOOSE_CONNECT);



// for cross port acess
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200')

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, token');

    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, datetimestamp + '-' + file.originalname);
    }
});
var upload = multer({ //multer settings
    storage: storage
}).single('file');
app.post('/api/upload', function(req, res) {

    upload(req,res,function(err){
        if(err){
            res.json({succsess: false,err_desc:err});
            return;
        } else {
            res.json({succsess: true,data: req.file});
        }
    });
});


app.use(express.static(path.resolve(__dirname, 'client/dist')));
app.use('/files',express.static(path.resolve(__dirname, 'uploads')));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/secure-api', secureRoutes);

//auth middlware
secureRoutes.use(function (req,res,next) {
    var token = req.body.token || req.header('token');
    
    if (token) {
        jwt.verify(token, process.env.SECRET, function (err, decode){
            if (err) {
                res.status(500).send('Invalid token')
            } else {
                next();
            }
        })
    } else {
        res.send('plesase send token')
    }
})


app.post('/api/createuser', authenticateController.createUser);
app.post('/api/authenticate', authenticateController.authenticate);
app.get('/api/verify', authenticateController.verifyUser);


secureRoutes.get('/getbooks', dataController.getBooks);
secureRoutes.get('/getbook/:id', dataController.getBook);
secureRoutes.put('/updatebook/:id', dataController.updateBook);
secureRoutes.post('/postbook', dataController.postBook);
secureRoutes.delete('/deletebook/:id',dataController.deleteBook);
app.post('/api/uploadbook', dataController.uploadBook);



app.listen(process.env.PORT || 3000, function () {
    console.log('server is up')
})
