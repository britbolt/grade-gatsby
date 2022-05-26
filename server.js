const express = require('express');
const path = require('path');
const app = express();
const { engine } = require('express-handlebars');
const PORT = process.env.PORT || 3000;



app.set('view engine', 'handlebars');

app.engine('handlebars', engine( { 
    layoutsDir: __dirname + '/views/layouts'
}));

app.use(express.static(path.join(__dirname)));
app.use(express.static('files'));
app.use(express.json());

app.post('api/login', (req, res) => {
const name = req.body.name,
        email = req.body.email,
        password = req.body.password
} );

app.get('/form', (req, res) => res.render( 'form' ));
app.get('/', (req, res) => {
    res.render('layouts/index')
});

app.get('/home', (req, res) => {
    res.render('home');
});

app.get('/login-teacher', (req, res) => {
    res.render('login-teacher');
});

app.listen(PORT, () => {
    console.log('Server is started at port', PORT);
});