let rSlider, gSlider, bSlider;
let myIP, myPort;
let r, g, b;
let img;


function preload(){
	img = loadImage("tree.png");

}
function setup() {

	createCanvas(400, 700);
	textSize(15);
	noStroke();



	myIP = getItem('myIP');
	myPort = getItem('myPort');

	// connects to static ip and port supplied by server.js

	socket = io.connect('http://192.168.0.4:4444');



	//create a toggle switch to toggle between acc mode and slider mode



	//createInputs();

	//connectButton();

	// create sliders
	bSlider = createSlider(0, 255, 0);
	bSlider.position(20, height/2 - 30);
	gSlider = createSlider(0, 255, 0);
	gSlider.position(20, height/2 - 60);
	rSlider = createSlider(0, 255, 0);
	rSlider.position(20, height/2 - 90);



}


function draw() {



	getSliders();
	imageMode(CENTER)

	image(img,width/2,75, 100, 100)

	var data = {
		r: r,
		g: g,
		b: b,
	}

	socket.emit('rgb', data);

	text("acc x: " + accelerationX,20,height-height/4)

	text("acc y: " + accelerationX,20,height-height/4+30)

}



function getSliders(){

	r = rSlider.value();
	g = gSlider.value();
	b = bSlider.value();

	background(r, g, b);

	fill("white")

	text('red: ' + r, rSlider.x * 2 + rSlider.width, height/2 - 75);
	text('green: ' + g, gSlider.x * 2 + gSlider.width, height/2 - 45);
	text('blue: ' + b, bSlider.x * 2 + bSlider.width, height/2 - 15);



}


function createInputs(){

	inpIP = createInput(str(myIP));
	inpIP.position(0, 0);
	inpIP.size(100);

	inpPort = createInput(str(myPort));
	inpPort.position(0, 30);
	inpPort.size(100);
}


function connectButton(){
	conn_button = createButton("connect");
	conn_button.position(0, 60);
	conn_button.mousePressed(setHost);
	conn_button.style("background-color","orange")
	conn_button.style("color","white")
}

function setHost() {


	let ip = inpIP.value();
	let port = inpPort.value();


	if(ip == null){

		console.log("null")


	}else{


		storeItem('myIP', ip);
		storeItem('myPort', port);

		//console.log(`${ip}:${port}`);
		console.log(myIP,myPort)


	}


}

