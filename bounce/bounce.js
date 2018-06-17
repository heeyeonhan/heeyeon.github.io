// Bounce.js

var COUNT = 20;
var balls =[];
var canvas; 

var mouseX=0;
var mouseY=0;


window.onload = function() {
    canvas = document.getElementById("my_canvas");
    canvas.onmousemove = function(evt){
        var rect = canvas.getBoundingClientRect();
        mouseX =  evt.clientX - rect.left;
        mouseY =  evt.clientY - rect.top;
    }
    canvas.onmouseout = function(evt){
     
        mouseX =  -1
        mouseY =  -1
    }

    for(x=0; x<COUNT; x++){
        balls.push(new Ball (canvas.width,canvas.height));
    }
   myLoop()
}

function myLoop(){

    let ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
    document.querySelector("#pos").innerHTML = mouseX + " / " + mouseY;
    for(x=0; x<balls.length; x++){
        balls[x].draw(ctx)
        balls[x].update()
    }
    setTimeout(myLoop,1000/70);
   
}


