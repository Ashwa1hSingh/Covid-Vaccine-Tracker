const fs = require("fs")
const superagent = require("superagent");
const http = require("http");
const url = require("url");
const { response } = require("express");
var express = require("express");
var JSON = require("JSON");
;
const { Http2ServerRequest } = require("http2");
const request = require("superagent");
const { time } = require("console");
const { builtinModules } = require("module");


let pin;
let d;
var app = express();
app.use(express.static('public'));

app.use(function (req, res, next) {
    res.setHeader("content-type", "application/json; charset = utf-8");
    next();
});



app.get('/myform', function (req, res) {
    response: {
        pin = req.query.pin;
        d = req.query.d;
    };


    const vaccine = async () => {
        try {

            const url = await superagent.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${d}`);
            res.send(url);

        }
        catch (err) {
            res.send(err);
        }
        console.log('2: Ready');
    };
    console.log("1: Getting options");
    vaccine().then(x => {

    }).catch(err => {
        console.log('ERROR');
    });

});


app.listen(8000);
