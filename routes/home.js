const express = require('express');
const homeRouter = express.Router();
const { COOKIES_TYPES, COOKIES_ADDONS } = require('../data/cookies-data');
const { handlebarsHelpers } = require('../handlebars-helpers/handlebars-helpers');

homeRouter.get('/', (req, res) => {
    const { cookieType, cookieAddons } = req.cookies;
    const defaultCookie = !cookieType ? 'light' : cookieType;
    const addons = cookieAddons ? JSON.parse(cookieAddons) : [];

    const sumOrder =
        handlebarsHelpers['find-price'](Object.entries(COOKIES_TYPES), defaultCookie) +
        addons.reduce((prev, curr) => {
            return prev + handlebarsHelpers['find-price'](Object.entries(COOKIES_ADDONS), curr);
        }, 0);

    res.render('home/index', {
        cookie: {
            type: defaultCookie,
            addons,
        },
        types: Object.entries(COOKIES_TYPES),
        addons: Object.entries(COOKIES_ADDONS),
        sumOrder,
    });
});

module.exports = {
    homeRouter,
};
