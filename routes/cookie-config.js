const express = require('express');
const cookieConfigRouter = express.Router();

cookieConfigRouter.get('/select-type/:type', (req, res) => {
    const { type } = req.params;
    res.cookie('cookie-type', type).render('cookie-config/selected-type', {
        type,
    });
});

module.exports = {
    cookieConfigRouter,
};
