var s = document.querySelector("#svg");

var namespace = "http://www.w3.org/2000/svg";

var prevX, prevY;
var lines = false;

function clickHandler(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    
    var line = document.createElementNS(namespace, "line");
    line.setAttribute("x1", lines ? prevX: x);
    line.setAttribute("y1", lines ? prevY: y);
    line.setAttribute("x2", x);
    line.setAttribute("y2", y);
    line.setAttribute("style", "stroke:dodgerblue; stroke-width:2");

    var circle = document.createElementNS(namespace, "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", "20");
    circle.setAttribute("fill", "salmon");

    s.appendChild(circle);
    s.appendChild(line);

    lines = true;
    prevX = x;
    prevY = y;
}

s.addEventListener("click", clickHandler);
