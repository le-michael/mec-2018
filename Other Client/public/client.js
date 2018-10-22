var socket = io.connect(); 


var months = ["January","Feburary","March","April","May","June","July","Agust","September","October"
,"November","December"];



socket.on("chat",function(data){ // not sure why it plays twice but we'll figure that out 
    var msg = new SpeechSynthesisUtterance(data.message);
    window.speechSynthesis.speak(msg);

    var d = new Date();

    var h = d.getHours(); // 24 hour clock in est 

    console.log(h);

    var m = d.getUTCMinutes();
    var s = d.getUTCSeconds(); 
    var time = h.toString()+":"+m.toString()+":"+s.toString();
    console.log(time);

    output.innerHTML += "<p>" + data.message+ "<span align = 'right'>"  +time+ "</span>"+ "</p>" ;

});


// FUNCTIONS FOR LE 

