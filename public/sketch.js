function setup() {
	slider = createSlider(0, 180, 90, 5);
	slider.position(30, 90);
 	slider.style('width', '400px');
	slider.style('height', '300px');
	
	socket = io.connect('http://192.168.0.4:5557');
	frameRate(11);
}

function draw() {
	var data = {
            rgb_val: slider.value()
         }

       socket.emit('values', data);
}
