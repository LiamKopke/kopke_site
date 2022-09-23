const express = require('express');
const serverless = require('serverless-http');

// Define app for express
const app = express();

// Write down all controller file names
const controllers = ['siteController', 'errorController'];

app.use(express.json());

// Used for handlebars
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');

// Define handlebars to use .hbs file extension inside of the views folder
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', './views');

// Add support for forms
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));

// Register routes from all controllers 
// Assume files are in the controllers folder and that all controllers export router and routeRoot
controllers.forEach((controllerName) => {
    try {
        const controllerRoutes = require('./controllers/' + controllerName);
        app.use(controllerRoutes.routeRoot, controllerRoutes.router);
    } catch (error) {
        //fail gracefully if no routes for this controller
        console.log(error);
    }
});


var handlebars = require('handlebars');
handlebars.registerHelper("decrement", function (varName, varValue, options) {
    options.data.root[varName] = varValue - 1;
});

module.exports.handler = serverless(app);