var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var logger = require("morgan");
var mongoose = require("mongoose");

//set up express app 
var app = express();
// Use morgan logger for logging requests
app.use(logger("dev"));
//set up the express app to handle data parsing 
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json("public"));
//accessing the public folder for css
app.use(express.static(process.cwd() + "/public"));

//set up handlebars 
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defualtLatout: "main" }));
app.set("view engine", "handlebars");
//link routes 
require('./routes/apiRoutes.js')(app);
require('./routes/htmlRoutes.js')(app);

var MONGODB_URL = 
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/StanceNation", {
  // useMongoClient: true
});

var PORT = process.env.PORT || 3000;

// starts the server to began listening 
app.listen(process.env.PORT || 3000, function() {
	console.log("App listing on PORT " + 3000)
});