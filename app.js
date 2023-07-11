const express = require('express');
const routes = require('./routes/index');
const path = require('path');
const bodyParser = require('body-parser');

//Use dotenv to make environment variables available to the application via process.env
require('dotenv').config();

//Define the Express server and set the view engine to Pug
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Create a static repository in the public folder (ahhh Apache's memories!)
app.use(express.static('public'));

//Parse the body of POST requests
app.use(bodyParser.urlencoded({ extended: true}));

//Set the main route
app.use('/', routes);

module.exports = app;