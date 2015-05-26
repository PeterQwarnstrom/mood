var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var routes = require('./app/routes');

// Set our static content directories
app.use('/public', express.static('public'));
app.use('/bower', express.static('bower_components'));

// Set jade as the templating engine
app.set('view engine', 'jade'); 

// Parse application/x-www-form-urlencoded and application/json 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Routing
app.get('/', routes.main);

var appPort = Number(process.env.PORT || 4444);
var server = app.listen(appPort);
console.log('Listening on port ' + appPort);
