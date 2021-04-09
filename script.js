let canvas,
    ctx,
    flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false,
    zmax = 5,
    zdepth = -5;

const coordlist = [];
var x = "black",
    y = 2;

function init() {
    canvas = document.getElementById("can");
    ctx = canvas.getContext("2d");
    w = canvas.width;
    h = canvas.height;

    canvas.addEventListener(
        "mousemove",
        function (e) {
            findxy("move", e);
        },
        false
    );
    canvas.addEventListener(
        "mousedown",
        function (e) {
            findxy("down", e);
        },
        false
    );
    canvas.addEventListener(
        "mouseup",
        function (e) {
            findxy("up", e);
        },
        false
    );
    canvas.addEventListener(
        "mouseout",
        function (e) {
            findxy("out", e);
        },
        false
    );

    document.getElementById("clr").addEventListener("click", clear());

    document.getElementById("btn").addEventListener("click", function () {
        var text = document.getElementById("hey").innerText;
        var blob = new Blob([text], { type: "text/plain" });
        download(blob, "code.gcode");
    });
}

function clear() {
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    console.clear();
    document.getElementById("hey").innerHTML = "";
    console.clear();
}

function download(blob, name) {
    var url = URL.createObjectURL(blob),
        div = document.createElement("div"),
        anch = document.createElement("a");

    document.body.appendChild(div);
    div.appendChild(anch);

    anch.innerHTML = "&nbsp;";
    div.style.width = "0";
    div.style.height = "0";
    anch.href = url;
    anch.download = name;

    var ev = new MouseEvent("click", {});
    anch.dispatchEvent(ev);
    document.body.removeChild(div);
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

function findxy(res, e) {
    if (res == "down") {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;

        makecode("G00 X" + currX + " Y" + (400 - currY));
        flag = true;
        dot_flag = true;
        if (dot_flag) {
            ctx.beginPath();
            ctx.fillStyle = x;
            ctx.arc(currX, currY, 1, 0, 2 * Math.PI);
            ctx.fill();
            dot_flag = false;
        }

        makecode("G01 X" + currX + " Y" + (400 - currY) + " Z-10");
    }
    if (res == "up" || res == "out") {
        //alert("adljnladcn")
        if (flag === true) {
            prevX = currX;
            prevY = currY;

            makecode("G01 X" + currX + " Y" + (400 - currY) + " Z5");
        }
        flag = false;
    }
    if (res == "move") {
        if (flag) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
            if (!(prevX === currX && prevY === currY)) {
                draw();

                makecode("G01 X" + currX + " Y" + (400 - currY));
            }
        }
    }
}

function makecode(str) {
    var node = document.createElement("span");
    var textnode = document.createTextNode(str);
    node.appendChild(textnode);
    document.getElementById("hey").appendChild(node);
    var node2 = document.createElement("br");
    document.getElementById("hey").appendChild(node2);
    document
        .getElementById("hey")
        .scrollTo(0, document.querySelector("#hey").scrollHeight);
}

function letsgo() {
    document.getElementById("fly-in").style.display = "none";
    document.getElementById("config").style.display = "block";
    //document.getElementById("drawing-page").style.display = "block";
}
function letsdraw() {
    document.getElementById("config").style.display = "none";
    //document.getElementById("config").style.display = "block";
    document.getElementById("drawing-page").style.display = "block";
}
