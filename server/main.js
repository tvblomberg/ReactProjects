var express = require('express');
var app = new express();
var parser = require('body-parser');
var GroceryItem = require('./models/GroceryItem.js');

// Map out bower compenents to work on the front end
app.use(express.static(__dirname + '/../bower_components'));

// Initial Route to index and start server
app.get('/', function(req,res) {
	res.render('./../app/index.ejs', {});
})
.use(express.static(__dirname + '/../.tmp'))
.listen(7777);

// Parse Json
app.use(parser.json());

//Encode for POST requests
app.use(parser.urlencoded({extended: false}));

// Routing for items
require('./routes/items.js')(app);
require('./database.js');
/*
var express = require('express');
var app = new express();
var parser = require('body-parser');
var React = require('react/addons');
var GroceryItem = require('./models/GroceryItem.js');

// Map out bower compenents to work on the front end
app.use(express.static(__dirname + '/../bower_components'));

require('babel-core/register');
require('./database.js');

// Initial Route to index and start server
app.get('/', function(req,res) {
	//res.render('./../app/index.ejs', {});
    var application =  React.createFactory(require('./../app/components/GroceryItemList.jsx')); 
    
    GroceryItem.find(function(error, doc) {
       var output = React.renderToString(application({
           items: doc
       })); 
       res.render('./../app/index.ejs', {reactOutput: output});
    });
})
.use(express.static(__dirname + '/../.tmp'))
.listen(7777);

// Parse Json
app.use(parser.json());

//Encode for POST requests
app.use(parser.urlencoded({extended: false}));

// Routing for items
require('./routes/items.js')(app);
require('./database.js');*/