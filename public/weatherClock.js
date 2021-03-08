/* Analog clock */

var date = new Date();
var d = date.toString();
var userAlertSet = new Date("October 13, 2014 11:13:00");
// add in from input of the user dynamically
d = d.slice(0, 15);
$('.clock').text(d);

/* ********************************************** weather analog clock************************************************ */


// clock canvas

var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");
var radius2 = canvas2.height / 2;
ctx2.translate(radius2, radius2);
radius2 = radius2 * 0.70
setInterval(drawClock2, 1000);

function drawClock2() {
  drawFace2(ctx2, radius2);
  drawNumbers2(ctx2, radius2);
  drawTime2(ctx2, radius2);
}
// decrease the frame size for the clock or find a way to roudn it down perfectly
function drawFace2(ctx2, radius2) {
   ctx2.globalAlpha = 0.4
   var grad;
  ctx2.beginPath();
  ctx2.arc(0, 0, radius2, 0, 2 * Math.PI);
   ctx2.fillStyle =  "rgb(135, 176, 189)";
   ctx2.fill();
  grad = ctx2.createRadialGradient(0, 0, radius2 * 0.89, 0, 0, radius2 * 1.211);
  grad.addColorStop(0, 'grey');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, 'rgb(124, 174, 189)');

  ctx2.strokeStyle = grad;
  ctx2.lineWidth = radius2 * 0.1;
  ctx2.stroke();
  ctx2.beginPath();
  ctx2.arc(0, 0, radius2 * 0.08, 0, 2 * Math.PI);
  ctx2.fillStyle = 'black';
  ctx2.fill();
}


function drawNumbers2(ctx2, radius2) {
  var ang;
  var num;
  ctx2.font = radius2 * 0.20 + "px arial";
  ctx2.textBaseline = "middle";
  ctx2.textAlign = "center";
  for (num = 1; num < 13; num++) {
    ang = num * Math.PI / 6;
    ctx2.rotate(ang);
    ctx2.translate(0, -radius2 * 0.80);
    ctx2.rotate(-ang);
    ctx2.fillText(num.toString(), 0, 0);
    ctx2.rotate(ang);
    ctx2.translate(0, radius2 * 0.80);
    ctx2.rotate(-ang);

  }
}

function drawTime2(ctx2, radius2) {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  //hour
  hour = hour % 12;
  hour = (hour * Math.PI / 6) +
    (minute * Math.PI / (6 * 60)) +
    (second * Math.PI / (360 * 60));
  drawHand2(ctx2, hour, radius2 * 0.65, radius2 * 0.055);
  //minute
  minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
  drawHand2(ctx2, minute, radius2 * 0.81, radius2 * 0.04);
  // second
  second = (second * Math.PI / 30);
  drawHand2(ctx2, second, radius2 * 0.86, radius2 * 0.025);

}

function drawHand2(ctx2, pos, length, width) {
  ctx2.beginPath();
  ctx2.lineWidth = width;
  ctx2.lineCap = "round";
  ctx2.moveTo(0, 0);
  ctx2.rotate(pos);
  ctx2.lineTo(0, -length);
  ctx2.stroke();
  ctx2.rotate(-pos);
} 