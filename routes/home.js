const express = require('express');
const homeRouter = express.Router();
const { COOKIES_TYPES, COOKIES_ADDONS } = require('../data/cookies-data');
const { handlebarsHelpers } = require('../handlebars-helpers/handlebars-helpers');

homeRouter.get('/', (req, res) => {
    const { cookieType } = req.cookies;
    const defaultCookie = !cookieType ? 'light' : cookieType;
    const sumOrder =
        handlebarsHelpers['find-price'](Object.entries(COOKIES_TYPES), defaultCookie) +
        ['coconut', 'strawberries', 'honey', 'candy', 'sprinkles'].reduce((prev, curr) => {
            return prev + handlebarsHelpers['find-price'](Object.entries(COOKIES_ADDONS), curr);
        }, 0);

    res.render('home/index', {
        cookie: {
            type: defaultCookie,
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
