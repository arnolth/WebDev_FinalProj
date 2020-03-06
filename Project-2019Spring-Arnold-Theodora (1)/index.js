var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '/public')));

var handlebars = require('express-handlebars').create({
    defaultLayout: 'main'
});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 9012);

app.get('/about', function(req, res){
    res.render('about');
});

app.get('/destinations', function(req, res) {
    res.render('destinations');
});

app.get('/contact', function(req, res){
    res.render('contact');
});

app.get('/austria', function(req, res){
    res.render('austria');
});

app.get('/ireland', function(req, res){
    res.render('ireland');
});

app.get('/france', function(req, res){
    res.render('france');
});

app.get('/home', function(req, res) {
    res.render('home');
});

app.get('/', function(req, res) {
    res.render('home');
});

app.use(function(req, res) {
    res.status(404);
    res.render('404');
});

app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
