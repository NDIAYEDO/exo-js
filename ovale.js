

function oval()
{
  var canvas = document.getElementById("canvas3"); 
  var context = canvas.getContext("2d");
  context.lineWidth="4";
  context.strokeStyle="green";
  context.scale(1, 0.5);
  context.beginPath();
  context.arc(200, 200, 180, 0, 2 * Math.PI);
  context.stroke();
}
oval(); 