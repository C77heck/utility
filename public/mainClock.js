/* Analog clock */

var date = new Date();
var d = date.toString();
var userAlertSet = new Date("October 13, 2014 11:13:00");
// add in from input of the user dynamically
d = d.slice(0, 15);
$('.clock').text(d);





// clock canvas

 let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.70
setInterval(drawClock, 1000);

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}
// decrease the frame size for the clock or find a way to roudn it down perfectly
function drawFace(ctx, radius) {
   var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
   ctx.fillStyle = 'white';
   ctx.fill();
  grad = ctx.createRadialGradient(0, 0, radius * 0.89, 0, 0, radius * 1.211);
  grad.addColorStop(0, 'black');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, 'white');

  ctx.strokeStyle = grad;
  ctx.lineWidth = radius * 0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.08, 0, 2 * Math.PI);
  ctx.fillStyle = 'black';
  ctx.fill();
}


function drawNumbers(ctx, radius) {
  let ang;
  let num;
  ctx.font = radius * 0.20 + "px arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  for (num = 1; num < 13; num++) {
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.80);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.80);
    ctx.rotate(-ang);

  }
}

function drawTime(ctx, radius) {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  //hour
  hour = hour % 12;
  hour = (hour * Math.PI / 6) +
    (minute * Math.PI / (6 * 60)) +
    (second * Math.PI / (360 * 60));
  drawHand(ctx, hour, radius * 0.65, radius * 0.055);
  //minute
  minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
  drawHand(ctx, minute, radius * 0.81, radius * 0.04);
  // second
  second = (second * Math.PI / 30);
  drawHand(ctx, second, radius * 0.86, radius * 0.025);

}

function drawHand(ctx, pos, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
} 