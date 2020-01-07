//lets import express server
var express = require('express');

//require path
var path = require('path');

//I require our middleware for forms
var body_parser = require('body-parser')

//I require morgan for cross origin resource
var cors = require('cors');

//the database configuration 
var db = require('../config/db');

//require the routes creaated seperately
var routes = require( './router.js');

//require express handlebars
var exphbs = require('express-handlebars');

//lets use the files we have required, we use express first, since it is our server
const app = express();

//use body-parser and cors
app.use(body_parser.urlencoded({extended:false}))
app.use(body_parser.json());
app.use(cors({credentials:true}));

//setup the views
app.set('views', path.join(__dirname,'../views'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//static files
app.use(express.static(path.join(__dirname, '../views/public')));

//I used the other routes here
app.use(routes);

//Now tisten to this port 
if (app.listen(process.env.PORT || 5000)) {

    console.log("Node is listening to port 5000");
}
else{
    console.log("Database connection error");
}
