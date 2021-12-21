const express = require('express');
const cookieConfigRouter = express.Router();

cookieConfigRouter.get('/select-type/:type', (req, res) => {
    const { type } = req.params;
    res.cookie('cookieType', type).render('cookie-config/selected-type', {
        type,
    });
});

cookieConfigRouter.get('/add-addon/:addon', (req, res) => {
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
});

module.exports = {
    cookieConfigRouter,
};
