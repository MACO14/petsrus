const express = require('express');

const mongoose = require("mongoose");

const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render('views/about');
}); 

app.get('/grooming', (req, res) => {
    res.render('views/grooming');
});

app.get('/navbar', function(req, res) {
    res.render('partials/navbar');
});

app.get('/header', function(req, res) {
    res.render('partials/header');
})

app.listen(PORT, () => {
    console.log('Application started and listening on PORT ' + PORT);
})

console.log('hello')