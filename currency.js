var express = require('express');
var app = express();

app.get('/currency', function (req, res) {
    setTimeout(function () {
        res.json({rate: 0.031});
    }, 100);
});

app.get('/', function (req, res) {
    res.sendfile('./currency.html');
});

app.listen(3000);