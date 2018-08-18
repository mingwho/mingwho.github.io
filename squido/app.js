    //Set up requirements
var express = require("express");
var Request = require('request');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);

var bodyParser = require('body-parser');
var _ = require('underscore');

//Set up the views directory
app.set("views", __dirname + '/views');
//Set EJS as templating language WITH html as an extension
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
//Add connection to the public folder for css & js files
app.use(express.static(__dirname + '/public'));

// Enable json body parsing of application/json
app.use(bodyParser.json());


//Main Page Route - Show ALL data VIEW
app.get("/", function(req, res){
	console.log("trying to get connection");
	res.sendFile(__dirname+'/views/index.html');
});

server.lastPlayderID = 0;

server.listen(process.env.PORT || 8081,function(){
    console.log('Listening on '+server.address().port);
});
