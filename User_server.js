var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000))
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://<sajid>:<sajid>@ds157677.mlab.com:57677/patientsdb');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var user = require('./routes/Add_user.js')(app);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
