const express = require('express');
const app = express();
const exphb = require('express-handlebars');

app.engine('handlebars', exphb({
    defaultLayout: 'main', 
    layoutsDir: 'views/layouts'
}));

app.get('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.listen(3001, () => {
    console.log('Server is start at port', 3001);
});