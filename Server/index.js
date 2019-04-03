const net = require('net');
const easymidi = require("easymidi");

const HOST = 'localhost';
const PORT = 8080;

var clientList = [];

// Create a server instance, and chain the listen function to it
// The function passed to net.createServer() becomes the event handler for the 'connection' event
// The sock object the callback function receives UNIQUE for each connection
net.createServer(function(sock) {

  clientList.push(sock);

  // We have a connection - a socket object is assigned to the connection automatically
  console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);

  // Add a 'data' event handler to this instance of socket
  sock.on('data', function(data) {

    console.log(sock.remoteAddress + ': ' + data);
    // Monitor all MIDI inputs with a single "message" listener
    easymidi.getInputs().forEach(function (inputName) {
      var input = new easymidi.Input(inputName);
      input.on('message', function (msg) {
        var vals = Object.keys(msg).map(function (key) {
            return key + ": " + msg[key];
        });
        if (vals[3] === "_type: noteon") {
          console.log(vals[1].split(' ')[1]);
          for (var i = 0; i < clientList.length; i++) {
            if (vals[1].split(' ')[1] === "48" || vals[1].split(' ')[1] === "60" || vals[1].split(' ')[1] === "72") {
              clientList[i].write("c");
            } else if (vals[1].split(' ')[1] === "62" || vals[1].split(' ')[1] === "50") {
              clientList[i].write("d");
            } else if (vals[1].split(' ')[1] === "64" || vals[1].split(' ')[1] === "52") {
              clientList[i].write("e");
            } else if (vals[1].split(' ')[1] === "65" || vals[1].split(' ')[1] === "53") {
              clientList[i].write("f");
            } else if (vals[1].split(' ')[1] === "67" || vals[1].split(' ')[1] === "55") {
              clientList[i].write("g");
            } else if (vals[1].split(' ')[1] === "69" || vals[1].split(' ')[1] === "57") {
              clientList[i].write("a");
            } else if (vals[1].split(' ')[1] === "71" || vals[1].split(' ')[1] === "59") {
              clientList[i].write("b");
            }
          }
        }
      });
    });
  });

  // Add a 'close' event handler to this instance of socket
  sock.on('close', function(data) {
    clientList.pop();
    console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
  });

}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);
