// Backend
var express = require('express'); // using express for dependancies 
var app = express();
var socket = require('socket.io');
var fs = require('fs');

var lines = fs.readFileSync('./chatlog.txt', 'utf-8') // read file synchronosly since the textfile should load before the user sees the screen
    .split('\r\n') // change to \n later 
    .filter(Boolean);
console.log(lines);



var outputStr = "";



/*
// initial conversion from text to output html 
for( var i = 0; i < lines.length; i++){
    outputStr += "<p>" +  lines[i] + "</p>" ;  

}
*/

// forloop with sychronous loops so that the tagging happens at the right time, asychonously messes up the order of the <p> tags 

lines.forEach(item => {
    outputStr += "<p>"+item+"</p>";
});

console.log(outputStr,"after initial load type: ", typeof outputStr); // outputStr is a string with  < p > tags. 
// pass in the text file as a string into the

// app settings 
var server = app.listen(5000, "0.0.0.0",function(){ // opes the port
    console.log("lisetning to requests on port 5000")
});
app.use(express.static('public'));
var io = socket(server); 

// socket functions // 
io.on("connection",function(socket){ // if connected 
    console.log("made socket connection",socket.id);

    console.log('emiiting',outputStr);
    socket.emit("update",outputStr);



    socket.on("chat",function(data){ // chat comes from react server 
        console.log(data.message,"this is the data comming from the chat function");


        var clientMessage = {
            message : data.message,
            time: getTime()
        };
        console.log(clientMessage);
        socket.broadcast.emit("clientchat", clientMessage); // all sockets connected clientchat sends to the client side 

        fs.appendFileSync('./chatlog.txt', clientMessage.time+clientMessage.message +"\r\n");
    });
});

function getTime(){
    var d = new Date();
    var h = d.getHours(); // 24 hour clock in est 
    var m = d.getUTCMinutes();
    var s = d.getUTCSeconds(); 
    return h.toString()+":"+m.toString()+":"+s.toString();

}