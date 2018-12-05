// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var User = require("../models/model.js");

// Routes
// =============================================================
module.exports = function(app) {
// Search for Specific User (or all users) then provides JSON
    app.get("/api/:users?", function(req, res){
        if (req.params.users) {
            User.findOne({
                where: {
                    username: req.params.users,
                    password: req.password
                }
            }).then(function(result){
                return res.json(result)
            });
        } 
    });

// If a user sends data to add a new user...
app.post("/api/new", function(req, res){
// Take the request...
    var user = req.body;

    User.create({
        username: user.username,
        email: user.email,
        password: user.password,
        stock1: "",
        stock2: "",
        stock3: ""
    });

    res.status(204).end();
});



}