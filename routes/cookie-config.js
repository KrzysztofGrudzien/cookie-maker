const express = require('express');
const cookieConfigRouter = express.Router();

cookieConfigRouter
    .get('/select-type/:type', (req, res) => {
        const { type } = req.params;
        res.cookie('cookieType', type).render('cookie-config/selected-type', {
            type,
        });
    })
    .get('/add-addon/:addon', (req, res) => {
        const { cookieAddons } = req.cookies;
        const { addon } = req.params;
        const addons = cookieAddons ? JSON.parse(cookieAddons) : [];

        if (!addons.includes(addon)) {
            addons.push(addon);
            res.cookie('cookieAddons', JSON.stringify(addons)).render('cookie-config/added-addon', {
                addon,
            });
        } else {
            res.render('cookie-config/error', {
                addon,
            });
        }
    })
    .get('/delete-addon/:addon', (req, res) => {
        const { cookieAddons } = req.cookies;
        const { addon } = req.params;
        const addons = (cookieAddons ? JSON.parse(cookieAddons) : []).filter(addonName => addonName !== addon);

        res.cookie('cookieAddons', JSON.stringify(addons)).render('cookie-config/deleted-addon', {
            addon,
        });
    });

module.exports = {
    cookieConfigRouter,
};
