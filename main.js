var lpox,lpoy;
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 5;
    var width= screen.width;
    new_width=screen.width-70;
    new_height=screen.height-300;
    if(width < 922){
        document.getElementById("myCanvas").width = new_width;
        document.getElementById("myCanvas").height = new_height;
        document.body.style.overflow = "hidden";

    }

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
       lpox=e.touches[0].clientX-canvas.offsetleft;
       lpoy=e.touches[0].clientY-canvas.offsetTop;
       console.log("mytouchstart")
    }



    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
     console.log("mytouchmove");
        cpox=e.touches[0].clientX-canvas.offsetleft;
        cpoy=e.touches[0].clientY-canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + lpox + "y = " + lpoy);
        ctx.moveTo(lpox,lpoy);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + cpox + "y = " + cpoy);
        ctx.lineTo(cpox,cpoy);
        ctx.stroke();
        

        lpox=cpox;
        lpoy=cpoy;
    }

