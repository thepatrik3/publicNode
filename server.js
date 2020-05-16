'use strict';
var express = require('express');
var app = require('./app');

var http = require('http').Server(app);
var path = require('path');

app.set('port', (process.env.PORT || 3000));

// serve the static assets 
// from the public/ directory
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/ticket', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/ticket.html'));
});

http.listen(app.get('port'), function () {
    console.log('listening on *:' + app.get('port'));
});

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err);
});