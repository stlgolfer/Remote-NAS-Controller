var express = require('express');
var fs = require("fs");
var request = require('request');
var bodyParser = require('body-parser');

var app = express();
var nasstatus = false;

console.log("Express Initialized!");


// CORS headers and other
app.use(function(req, res, next) {
          res.header("Access-Control-Allow-Origin", "*");
          res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
          next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

// render a nice webpage to turn it on and off
app.get('/', (req, res) => {
        res.render('pages/home');
})

app.get('/on', (req, res) => {
        if (req.{something}.password == "123456") {
                nasstatus = true;
        }
        // need to run a py script here to turn on the relay
})

app.get('/off', (req, res) => {
        if (req.{something}.password == "123456") {

        }
        // need to py script here to turn off the relay
})

app.get('/status', (req, res) => {
        res.json({
                status: nasstatus
        })
})

var server = app.listen(config.port, function () {
          var host = server.address().address;
          var port = server.address().port;

          console.log("NAS Power Controller Running at http://localhost", host, port);
})
