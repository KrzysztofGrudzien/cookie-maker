const express = require('express');
const homeRouter = express.Router();
const { COOKIES_TYPES, COOKIES_ADDONS } = require('../data/cookies-data');
const { handlebarsHelpers } = require('../handlebars-helpers/handlebars-helpers');

homeRouter.get('/', (req, res) => {
    const sumOrder =
        handlebarsHelpers['find-price'](Object.entries(COOKIES_TYPES), 'light') +
        ['coconut', 'strawberries', 'honey', 'candy', 'sprinkles'].reduce((prev, curr) => {
            return prev + handlebarsHelpers['find-price'](Object.entries(COOKIES_ADDONS), curr);
        }, 0);

    res.render('home/index', {
        cookie: {
            type: 'light',
            addons: ['coconut', 'strawberries', 'honey', 'candy', 'sprinkles'],
        },
        types: Object.entries(COOKIES_TYPES),
        addons: Object.entries(COOKIES_ADDONS),
        sumOrder,
    });
});

module.exports = {
    homeRouter,
};
