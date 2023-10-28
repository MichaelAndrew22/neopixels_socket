let rSlider, gSlider, bSlider;

let r, g, b;


function setup() {

	createCanvas(400, 700);
	textSize(15);
	noStroke();

        socket = io.connect('http://192.168.0.4:4444');

	
	bSlider = createSlider(0, 255, 0);
	bSlider.position(20, height/2 - 30);
	gSlider = createSlider(0, 255, 0);
	gSlider.position(20, height/2 - 60);
	rSlider = createSlider(0, 255, 0);
	rSlider.position(20, height/2 - 90);


}


function draw() {

	getSliders();

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





