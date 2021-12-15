const express = require('express');
const cookieParser = require('cookie-parser');
const hbs = require('express-handlebars');
const { cookieConfigRouter } = require('./routes/cookie-config');
const { homeRouter } = require('./routes/home');
const { orderRouter } = require('./routes/order');

const app = express();
app.use(express.static('public'));
app.use(cookieParser());

app.engine('.hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.get('/', (req, res) => {
    res.send('ok');
});
app.use('/', homeRouter);
app.use('/cookie-config', cookieConfigRouter);
app.use('/order', orderRouter);

app.listen(3000, 'localhost');
