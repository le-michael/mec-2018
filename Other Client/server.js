// Backend
var express = require('express'); // using express for dependancies 
var app = express();
var socket = require('socket.io');
var fs = require('fs');
app.use(express.static('public'));


// server settings 
var server = app.listen(5000, "0.0.0.0",function(){ // opes the port
    console.log("lisetning to requests on port 5000")
});

var io = socket(server); 


// socket functions // 
io.on("connection",function(socket){ // if connected 
    console.log("made socket connection",socket.id);

    socket.emit("update",loadFile()); // reload the file every time the socket connection is made

    socket.on("chat",function(data){ // chat comes from react server 
        console.log(data.message,"this is the data comming from the chat function");

        var clientMessage = {
            message : data.message,
            time: getTime(),
            date : getDayMonth()
        };
        if(clientMessage.message !="" ){
            console.log(clientMessage);
            socket.broadcast.emit("clientchat", clientMessage); // all sockets connected clientchat sends to the client side 
            var text = clientMessage.date + " At "+clientMessage.time + " - " + clientMessage.message;
            writeToFile(text);
        }
    });
});


// functions // 
function getTime(){ // gets the time when the message is sent
    var d = new Date();
    return d.getHours().toString() + ":" +d.getMinutes().toString() + ":" + d.getSeconds().toString();
}

function getDayMonth(){ // gets the date that the message was sent 
    var months = ["January","Feburary","March","April","May","June","July","Agust","September","October","November","December"];
    var d = new Date(); 
    return months[d.getMonth()] + " " + d.getDate();
}

function writeToFile(text){ // writes a string to the file in the system
        text  = text +'\r\n';
        fs.appendFile('./chatlog.txt',text);
}

function loadFile(){ // loads the file and returs a string with the <p> tags included. 

    var outputStr = ""; 

    //read file synchronosly
    var lines = fs.readFileSync('./chatlog.txt', 'utf-8') // read file synchronosly since the textfile should load before the user sees the screen
    .split('\r\n') // change to \n later 
    .filter(Boolean);
    
    // convert array to string with <p> tags 
    lines.forEach(item => {
    outputStr += "<p>"+item+"</p>";
    });

    return outputStr;
}
