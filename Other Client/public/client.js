var socket = io.connect(); 
var fs; 
// reading file 




var months = ["January","Feburary","March","April","May","June","July","Agust","September","October"
,"November","December"];

socket.on("clientchat",function(data){ // not sure why it plays twice but we'll figure that out 
    console.log(data);
    var msg = new SpeechSynthesisUtterance(data.message);
    window.speechSynthesis.speak(msg);

   

    output.innerHTML += "<p>" + data.time+ " - "+"<span align = 'right'>"  +data.message+ "</span>"+ "</p>" ; //  adds message to the current HTML 

});
// initial update function happens when the server is connected, should update everytime there is a refresh
socket.on("update",function(data){ 
    console.log("recived from update function",data);
    output.innerHTML = data;


});
