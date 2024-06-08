canvas = document.getElementById("myCanvas");


ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=1;
ctx.arc(250,210,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color=document.getElementById("color").value; 
    console.log(color);

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    console.log("x = "+mouse_x + " ,Y = " + mouse_y);
    circle(mouse_x, mouse_y);
}

   function circle(mouse_x, mouse_y)
   {
    ctx.beginPath();
    ctx.strokeStyle="red";
    ctx.lineWidth = 1;
    ctx.arc( 150, 143, 430, 200);
    ctx.stroke();
   }

