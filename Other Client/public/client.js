var socket = io.connect('http://localhost:5000'); 
var fs; 
// reading file 

socket.on("update",function(data){ 
    console.log("recived from update function",data);
    output.innerHTML = data;
});

socket.on("clientchat",function(data){ 
    console.log(data);
    var msg = new SpeechSynthesisUtterance(data.message);
    window.speechSynthesis.speak(msg);

    output.innerHTML += "<p>" + data.date + " At " + data.time+ " - "+"<span align = 'right'>"  +data.message+ "</span>"+ "</p>" ; //  adds message to the current HTML 

});