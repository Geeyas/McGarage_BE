var express = require("express");
var app = express();
var cors = require('cors');
var http = require('http');
const path = require('path');
var mcGarageAPI = require("./controllerAPI/api-controller");

var bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use(cors());

app.use(express.static(process.cwd()+"/app/build/"));

app.use("/api", mcGarageAPI);

app.get('/', (req,res) => {
    res.sendFile(process.cwd()+"/app/build/index.html")
});

router.get('*', function(req, res) {
    res.sendFile(process.cwd()+"/app/build/index.html")
 });

http.createServer(app).listen(8000);
console.log("Server is Up and  running on Port 8000");
