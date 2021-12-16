const express = require('express');
const cookieConfigRouter = express.Router();

cookieConfigRouter.get('/', (req, res) => {
    res.render('cookie-config/index');
});

module.exports = {
    cookieConfigRouter,
};
