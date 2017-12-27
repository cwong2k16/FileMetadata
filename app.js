var express = require('express');
var multer = require('multer');

var app = express();

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(3008);