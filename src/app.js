const path = require('path');
const express = require('express');
const hbs = require('hbs'); 

const app=express()
const publicDicrectoryPath= path.join(__dirname,'../public')
const viewsPath= path.join(__dirname,'../templates/views')
const partialsPath= path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDicrectoryPath))
app.get('', (req, res) => {
    res.render('index', {
        title: 'ExpressApp',
        name: 'ShrutiKrishna',
        aboutText: 'Weather is Good!!'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'ShrutiKrishna',
        aboutText: 'Weather is Good!!'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        name: 'ShrutiKrishna'
    });
});
app.listen(3000,()=>{
console.log('Server is up on port 3000.');
})
app.get('/ExpressApp', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'ShrutiKrishna',
        errorMessage: 'Help article not found.'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'ShrutiKrishna',
        errorMessage: 'Page not found.'
    });
});
