const express = require('express');
const router = express.Router();
const routeRoot = '/';

// List of routes
router.get('/', (req, res) => {
    res.json({
        message: 'Hello from Express.js!'
    })
});

router.get('/Home', home);
router.get('/Poetry', poetry);
router.get('/Canada', canada);


/**
 * Method for rendering home.hbs
 * @param {*} req 
 * @param {*} res 
 */
function home(req, res){
    const pageData = {

    };
    res.render('home.hbs', pageData);
}

/**
 * Method for rendering poetry.hbs
 * @param {*} req 
 * @param {*} res 
 */
function poetry(req, res){
    const pageData = {

    };
    res.render('poetry.hbs', pageData);
}

/**
 * Method for rendering canada.hbs
 * @param {*} req 
 * @param {*} res 
 */
function canada(req, res){
    const pageData = {

    };
    res.render('canada.hbs', pageData);
}

module.exports = {
    router,
    routeRoot
}