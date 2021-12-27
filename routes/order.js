const express = require('express');
const orderRouter = express.Router();
const { COOKIES_TYPES, COOKIES_ADDONS } = require('../data/cookies-data');
const { handlebarsHelpers } = require('../handlebars-helpers/handlebars-helpers');

orderRouter
    .get('/summary-basket', (req, res) => {
        const { cookieType, cookieAddons } = req.cookies;
        const defaultCookie = !cookieType ? 'light' : cookieType;
        const addons = cookieAddons ? JSON.parse(cookieAddons) : [];

        const sumOrder =
            handlebarsHelpers['find-price'](Object.entries(COOKIES_TYPES), defaultCookie) +
            addons.reduce((prev, curr) => {
                return prev + handlebarsHelpers['find-price'](Object.entries(COOKIES_ADDONS), curr);
            }, 0);

        res.render('order/summary-basket', {
            cookie: {
                type: defaultCookie,
                addons,
            },
            types: Object.entries(COOKIES_TYPES),
            addons: Object.entries(COOKIES_ADDONS),
            sumOrder,
        });
    })
    .get('/thanks', (req, res) => {
        const { cookieType, cookieAddons } = req.cookies;
        const defaultCookie = !cookieType ? 'light' : cookieType;
        const addons = cookieAddons ? JSON.parse(cookieAddons) : [];

        const sumOrder =
            handlebarsHelpers['find-price'](Object.entries(COOKIES_TYPES), defaultCookie) +
            addons.reduce((prev, curr) => {
                return prev + handlebarsHelpers['find-price'](Object.entries(COOKIES_ADDONS), curr);
            }, 0);
        res.clearCookie('cookieType').clearCookie('cookieAddons').render('order/thanks', {
            sumOrder,
        });
    });

module.exports = {
    orderRouter,
};
