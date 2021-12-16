const express = require('express');
const orderRouter = express.Router();

orderRouter.get('/', (req, res) => {
    res.render('order/index');
});

module.exports = {
    orderRouter,
};
