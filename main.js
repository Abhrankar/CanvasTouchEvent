var width = screen.width;
var newWidth = screen.width - 70;
var newHeight = screen.height - 300;
if (width < 992) {
    document.getElementById("my_canvas").width = newWidth;
    document.getElementById("my_canvas").height = newHeight;
}

var Last_Position_Of_X, Last_Position_Of_Y;
canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 1;
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e) {
    color = document.getElementById("Canvas_input").value;
    width_of_line = document.getElementById("Width_input").value;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {
    var Current_Position_Of_X = e.touches[0].clientX - canvas.offsetLeft;
    var Current_Position_Of_Y = e.touches[0].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(Last_Position_Of_X, Last_Position_Of_Y);
        ctx.lineTo(Current_Position_Of_X, Current_Position_Of_Y);
        ctx.stroke();
    Last_Position_Of_X = Current_Position_Of_X;
    Last_Position_Of_Y = Current_Position_Of_Y;
}



function clearArea() {
    console.log("Hello");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
