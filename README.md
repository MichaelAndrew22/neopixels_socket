PI SOCKET LEDS


This setup just requires having node installed on your pi

Heres a quick tutorial on that: 

https://codingtrain.github.io/website-archive/Tutorials/12-websockets/12.1-introduction-to-node.html


To make this work this file needs to be downloaded onto the pi and run with node.

You run the server.js file by being in the same directory as it and typing      sudo node server.js     

The sketch.js is live rendered in the browser via a html canvas.

The sketch file sends data to the server.js file over a socket connection.

The server receives the data and communicates the data to the pi helping it to change colors.
