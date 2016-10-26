var socket = io();

socket.on('connect', function () {
	console.log('Connected to socket.io server!');
});

//below code is to listen the code which is sent by the server to socket server
socket.on('message', function (message) {

	console.log("New message: " + message.text)

});