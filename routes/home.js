const express = require('express');
const homeRouter = express.Router();
const { COOKIES_TYPES, COOKIES_ADDONS } = require('../data/cookies-data');

homeRouter.get('/', (req, res) => {
    res.render('home/index', {
        cookie: {
            type: 'light',
            addons: ['coconut', 'strawberries', 'honey', 'candy', 'sprinkles'],
        },
        types: Object.entries(COOKIES_TYPES),
        addons: Object.entries(COOKIES_ADDONS),
    });
});

module.exports = {
    homeRouter,
};
