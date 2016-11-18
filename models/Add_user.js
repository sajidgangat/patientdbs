var mongoose = require('mongoose');

var userschema = mongoose.Schema({

    firtsname: String,
    lastname: String,
    Dateofbirth: String,
    address: String,
    department: String,
    doctor: String


});

module.exports = mongoose.model('Add_user', userschema);
