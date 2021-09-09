
function fillCircle()
{
  var canvas = document.getElementById("canvas2");
  var context = canvas.getContext("2d");
  context.beginPath();
  context.fillStyle="#FF4422"
  context.arc(100, 100, 90, 0, 2 * Math.PI);
  context.fill();
}
fillCircle(); 