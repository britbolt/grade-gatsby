const express = require('express');
const path = require('path');
const app = express();
const { engine } = require('express-handlebars');
const PORT = process.env.PORT || 3000;


app.set('view engine', 'handlebars');

app.engine('handlebars', engine( { 
    layoutsDir: __dirname + '/views'
}));

app.use(express.static(path.join(__dirname)));
app.use(express.static('files'));


app.get('/form', (req, res) => res.render( 'form' ));
app.get('/', (req, res) => {
    res.render('layouts/index')
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.listen(PORT, () => {
    console.log('Server is started at port', PORT);
});