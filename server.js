var express = require("express");
var app = express();
var port = 5557
var server = app.listen(port,listening);
app.use(express.static('public'));


const ws281x = require('rpi-ws281x-native');

const channel = ws281x(7, { stripType: 'ws2812' });

const colorArray = channel.array;



var socket = require("socket.io");
var io = socket(server)
io.sockets.on('connection',newConnection);

function newConnection(socket){
	console.log("socket established :)" );
	socket.on('values',leds_change);

	function leds_change(data){

		var val = rgbToHex(data.r,data.g,data.b);

		console.log(val);

		for (let i = 0; i < channel.count; i++) {

			colorArray[i] = val;
		}


		ws281x.render();

	console.log(data);

	}
}


function rgbToHex(r, g, b) {  let hex = '0x'; 
 hex += ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  return hex; }


function listening(){
        console.log("listening on port "+port+"...")
}








