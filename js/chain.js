'use strict';

var c=document.getElementById("coverCanvas");
var ctx=c.getContext("2d");
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = 400;
function draw() {

  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.fillStyle="#FF0000";
  ctx.fill();
  ctx.strokeStyle="black";
  ctx.arc(100,100,25,0,2*Math.PI, 20);
  ctx.stroke();
}


