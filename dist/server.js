import express from "express";
var server = express();
server.get('health', function (req, res) { res.send("okay"); });
server.listen(4000, function () { return console.log("Server running on 4000 port"); });
