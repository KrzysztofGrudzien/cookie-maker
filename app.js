const express = require('express');
const cookieParser = require('cookie-parser');
const hbs = require('express-handlebars');

const app = express();
app.use(express.static('public'));
app.use(cookieParser());

app.engine('.hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.get('/', (req, res) => {
    res.send('ok');
});

app.listen(3000, 'localhost');
