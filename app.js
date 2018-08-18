    //Set up requirements
const express = require("express");
const Request = require('request');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io').listen(server);

const bodyParser = require('body-parser');
const _ = require('underscore');
const config = require('./config');


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
app.get("/squido", function(req, res){
	console.log("trying to get connection");
	res.sendFile(__dirname+'/views/blog.html');
});

server.lastPlayderID = 0;

server.listen(process.env.PORT || 8081,function(){
    console.log('Listening on '+server.address().port);
});
