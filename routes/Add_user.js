var _ = require('lodash');
var user=require('../models/Add_user.js')
module.exports = function(app) {

    /* Create */
    app.post('/CreateUser', function (req, res) {
        var newUser = new user(req.body);
        newUser.save(function(err) {
            if (err) {
                res.json({info: 'error during User create', error: err});
            };
            res.json({info: 'User created successfully'});
        });
    });

    /* Read */
    app.get('/GetUser', function (req, res) {
        user.find(function(err, users) {
            if (err) {
                res.json({info: 'error during find user', error: err});
            };
            res.json({info: 'users found successfully', data: users});
        });
    });

    

   


};
