var express = require('express');
var app = express();
var cors = require('cors');
var userAgent = require('express-useragent');

app.use(cors({optionSuccessStatus: 200}));
app.use(userAgent.express());

app.get('/', (req, res) =>{
    res.json({ip: req.headers['x-forwarded-for'],
              language: req.headers["accept-language"],
              browser: req.useragent.browser + ' ' + req.useragent.version,
              os: req.useragent.os,
              platform: req.useragent.platform});
});

app.listen(3000, () =>{
    console.log("Testing");
});