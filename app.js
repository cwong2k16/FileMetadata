var express = require('express');
var multer = require('multer');

var app = express();

var storage = multer.memoryStorage()
var upload = multer({ storage: storage })

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/upload', upload.single('file'), function (req, res, next) {
    var metadata = {size: null};
    if(!req.file){
        console.log("Please submit a file!");
        res.json();
    }
    else{
        metadata.size = req.file.size;
        res.json(metadata);
    }
});

app.listen(3008);