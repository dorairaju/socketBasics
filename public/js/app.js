//***** it is from QueryParams.js *****//
function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split('&');
	for( var i =0; i<vars.length; i++){
		var pair = vars[i].split("=");
		if (decodeURIComponent(pair[0]) == variable){
			return decodeURIComponent(pair[1]);
		}
	}

	return undefined;
}

//***** END *****//

var socket = io();

var name = getQueryVariable("name") || 'Anonymous';
var room = getQueryVariable("room");

var customText = name + " joined " + room;

console.log(customText);

socket.on('connect', function () {
	console.log('Connected to socket.io server!');
});

//below code is to listen the code which is sent by the server to socket server
socket.on('message', function (message) {
	var momentTimestamp = moment.utc(message.timestamp);

	console.log("New message: " + message.text);

	var $message = $('.messages');

	$message.append('<p><strong>' + message.name + ' ' + momentTimestamp.local().format('h:mm a') + '</strong></p>');
	$message.append('<p>'+message.text+'</p>');
});

// Hadles submitting of new message
var $form = $('#message-form');

$form.on("submit",function(event){
	event.preventDefault();

	socket.emit('message',{
		name: name,
		text: $form.find('input[name=message]').val()
	});

	$form.find('input[name=message]').val('');
});