var express = require("express");
var app = express();
var http = require('http');
var mcGarageAPI = require("./controllerAPI/api-controller");

var bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

var cors = require('cors');
app.use(cors());

app.use("/api", mcGarageAPI);

http.createServer(app).listen(80);
console.log("Server is Up and  running on Port 80");
