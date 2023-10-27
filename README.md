REAL TIME CONTROL OF NEOPIXELS ON RASPI

Yo guys I got a bare bones setup going. 

If you clone and run this it should work, you got to specify length though in server.js under 'const channel' its currently at 7.

The communication is between the sketch.js file in public that the client sees on the browser by going to ip and port.

The sketch file sends data to the server.js file over a socket connection.

Ultimately you would have this running on your pi,
then you would log into the ip and port
from there you can control leds from interface

Whats missing is making this nice by cleaning it up and building on it.
