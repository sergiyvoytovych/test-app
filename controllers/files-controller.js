var multer = require('multer');

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

module.exports.upploadBook = function (req,res) {
    upload(req,res,function(err){
        if(err){
            res.json({succsess: false,err_desc:err});
            return;
        } else {
            res.json({succsess: true,data: req.file});
        }
    });
}