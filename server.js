var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app); //to start a new server by using express
var io = require('socket.io')(http);
var moment = require("moment");



app.use(express.static(__dirname +'/public'));

io.on('connection', function (socket) {
	console.log('User connected via socket.io');

	socket.on('message', function(message){

		console.log('Message recieved: '+message.text);

		message.timestamp = moment().valueOf();
		//socket.broadcast.emit('message', message);
		io.emit('message', message);

	});

	// timestamp property - Javascript timestamp (milliseconds)

	socket.emit('message', {
		name: 'System',
		text: "Welcome to the chat application!",
		timestamp: moment().valueOf()
	});

});

http.listen(PORT, function () {
	console.log('Server started');
});