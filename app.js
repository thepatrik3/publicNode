'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(bodyParser.json({ type: process.env.content_Type }));

// Create the express router object
var myrouter = express.Router();

// A GET to the root of a resource returns a list of that resource
myrouter.get('/', function (req, res) { res.json({ errors: ['Get found'] }); });

// A POST to the root of a resource should create a new object
myrouter.post('/', function (req, res) {

    // some other code here 
});

// We specify a param in our path for the GET of a specific object
myrouter.get('/:id', function(req, res) { });

// Similar to the GET on an object, to update it we can PATCH
myrouter.patch('/:id', function(req, res) { });

// Delete a specific object
myrouter.delete('/:id', function (req, res) { });
// Attach the routers for their respective paths



app.use('/tun', myrouter);
app.use('/userdata', theUser);

module.exports = app;
