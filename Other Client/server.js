// Backend
var express = require('express'); // using express for dependancies 
var socket = require('socket.io');
// app settings 

var app = express();
var server = app.listen(5000, "0.0.0.0",function(){ // opes the port
    console.log("lisetning to requests on port 5000")
});


// static files 
app.use(express.static('public'));

// socket setup
var io = socket(server); // takes server as a paramater  we created the server using express
// socket uses the server now it waits for client. io is used as the socket for the server.

// using io.on listens for an event called connection, when the connection is made it runs
// the first function which encompasas all of the functions within the connection 
// the socket variable passed in is unique to each socket connection made between server
// and the client.

// stuff for the chat // 
io.on("connection",function(socket){ // if connected 
    console.log("made socket connection",socket.id);


    socket.on("chat",function(data){
        console.log(data);
        socket.broadcast.emit("chat", data); // all sockets connected
    });

    

});



