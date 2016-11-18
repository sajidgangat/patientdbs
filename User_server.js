var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://<sajid>:<sajid>@ds157677.mlab.com:57677/patientsdb');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var user = require('./routes/Add_user.js')(app);

var server = app.listen(3000, function () {
    console.log('Server running at http://127.0.0.1:3000/');
});
