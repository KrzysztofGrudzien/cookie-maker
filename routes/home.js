const express = require('express');
const homeRouter = express.Router();

homeRouter.get('/', (req, res) => {
    res.render('home/index', {
        cookie: {
            type: 'brown-light',
            addons: ['chocolate'],
        },
    });
});

module.exports = {
    homeRouter,
};
