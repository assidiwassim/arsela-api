var express = require('express');
var app = express();

var templateRouter = require('./template.route');
var processRouter = require('./process.route');

app.use('/template', templateRouter);
app.use('/process', processRouter);


module.exports = app