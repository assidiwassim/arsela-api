var express = require('express');
var app = express();
var mongoose =require("mongoose")
var logger = require('morgan');
const http = require('http');
const server = http.Server(app);
var cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

app.use(express.urlencoded({extended: true})); 
app.use(express.json());   
app.use(logger('dev'));
app.use(cors())
mongoose.connect(process.env.DB)

.then(() => console.log("MongoDB is connected"))
.catch(err =>console.log(err))

var indexRouter = require('./routes/index.route');
app.use('/api', indexRouter);

app.use(function (req, res, next) {
  res.status(404).send("Erreur 404 !!")
})

mongoose.Promise = global.Promise;
var port = process.env.PORT 
server.listen(port, () => {
  console.log("server is running " +port)
})

module.exports = app;
