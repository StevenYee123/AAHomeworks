document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById("mycanvas");
  canvas.width = 500; 
  canvas.height = 500;
    //To actually show the square on the screen?
    const context = canvas.getContext("2d");
    context.fillStyle = "orange";
    context.fillRect(0, 0, 500, 500);

    //To draw the circle 
    context.beginPath();
    context.arc(100, 100, 50, 0, 2 * Math.PI, true);
    context.strokeStyle = "blue"; 
    context.lineWidth = 2;
    context.stroke();

    //To fill in the circle 
    context.fillStyle = "red"
    context.fill();

});
