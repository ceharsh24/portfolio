var express = require('express');
require('dotenv').config()
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
const helmet = require('helmet')

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require('./routes');
app.use('/', routes);

app.use(function (req, res, err) {
    res.status(err.status || 500);
    res.send(err.message);
})

app.listen(8080, function() {
    console.log('express server is running on port 8080')
})