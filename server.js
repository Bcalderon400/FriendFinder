var express = require("express");
var path = require("path");
var bodyParser = require("body-parser")

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }))
app.use(express.json)
app.use(express.static("app/public"));

app.use(bodyParser.text())
app.use(bodyParser.json({ type: "application/vnd.api + json" }));

require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);


app.listen(PORT, function() {
    console.log("Server listening on: http://localhost: " + PORT)
})