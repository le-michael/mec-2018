var socket = io.connect(); 


var months = ["January","Feburary","March","April","May","June","July","Agust","September","October"
,"November","December"];
var btn = document.getElementById("send")
var message = document.getElementById("message");

btn.addEventListener("click",function(){



    talk(message);
    message.value = ""
    console.log("button press");
});



socket.on("chat",function(data){ // not sure why it plays twice but we'll figure that out 
    

var msg = new SpeechSynthesisUtterance(data.message);
window.speechSynthesis.speak(msg);

output.innerHTML += "<p>" + data.message+ "<span align = 'right'>"  +data.time+ "</span>"+ "</p>" ;

});


// FUNCTIONS FOR LE 
function talk(text){ // takes in the string, outputs the text to speech 
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth();
    var h = d.getUTCHours() - 16;
    var m = d.getUTCMinutes();
    var s = d.getUTCSeconds(); 
    console.log(day,months[month])

    date = months[month]+ " " +day.toString();

    
    var time = h.toString()+":"+m.toString()+":"+s.toString();
    console.log(time);


    socket.emit("chat",{
        message : text.value,
        time : time,
        date :date
    });
}




