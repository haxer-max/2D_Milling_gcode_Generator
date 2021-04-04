let canvas, ctx, flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false,
    zmax=5,
    zdepth=-5;

const coordlist = [];
var x = "black",
    y = 2;

function init() {
    canvas = document.getElementById('can');
    ctx = canvas.getContext("2d");
    w = canvas.width;
    h = canvas.height;

    canvas.addEventListener("mousemove", function (e) {
        findxy('move', e)
    }, false);
    canvas.addEventListener("mousedown", function (e) {
        findxy('down', e)
    }, false);
    canvas.addEventListener("mouseup", function (e) {
        findxy('up', e)
    }, false);
    canvas.addEventListener("mouseout", function (e) {
        findxy('out', e)
    }, false);
    
    
    document.getElementById("clr").addEventListener("click", function() {
        const context = canvas.getContext('2d');

       context.clearRect(0, 0, canvas.width, canvas.height);
       console.clear();
       var myobj = document.getElementById("hey");
       myobj.remove();
      });
}



function draw() {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
}



function save() {
    document.getElementById("canvasimg").style.border = "2px solid";
    var dataURL = canvas.toDataURL();
    document.getElementById("canvasimg").src = dataURL;
    document.getElementById("canvasimg").style.display = "inline";
}

function findxy(res, e) {
    if (res == 'down') {
        
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;
        var node = document.createElement("P");
        var textnode = document.createTextNode("G00 X"+ currX+ " Y"+ (400-currY));         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.getElementById("hey").appendChild(node);
        flag = true;
        dot_flag = true;
        if (dot_flag) {
            ctx.beginPath();
            ctx.fillStyle = x;
            //ctx.fillRect(currX, currY, 2, 2);
            ctx.arc(currX, currY, 1, 0, 2 * Math.PI);
            ctx.fill();
            //ctx.closePath();
            dot_flag = false;
        }
        coordlist.push(("G01 X"+ currX+ " Y"+ (400-currY)))
        console.log("G01 X"+ currX+ " Y"+ (400-currY))
        var node = document.createElement("P");
                var textnode = document.createTextNode("G01 X"+ currX+ " Y"+ (400-currY)+" Z-10");         // Create a text node
                node.appendChild(textnode);                              // Append the text to <li>
                document.getElementById("hey").appendChild(node);
    }
    if (res == 'up' || res == "out") {
        //alert("adljnladcn")
        if(flag===true){
            prevX = currX;
            prevY = currY;
            var node = document.createElement("P");
            var textnode = document.createTextNode("G01 X"+ currX+ " Y"+ (400-currY)+" Z5");
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("hey").appendChild(node);
        }
        flag = false;
    }
    if (res == 'move') {
        if (flag) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
            if(!(prevX === currX && prevY === currY)){
                draw();
                coordlist.push([currX,(400-currY)])
                console.log("G01 X"+ currX+ " Y"+ (400-currY))
                var node = document.createElement("P");
                var textnode = document.createTextNode("G01 X"+ currX+ " Y"+ (400-currY));         // Create a text node
                node.appendChild(textnode);                              // Append the text to <li>
                document.getElementById("hey").appendChild(node);
            }
            
        }
        
    }
}
