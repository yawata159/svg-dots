function main() {
    var s = document.querySelector("#svg");
    var c = document.querySelector("#clear");

    var namespace = "http://www.w3.org/2000/svg";
    var prevX, prevY;

    function clickHandler(e) {
        var x = e.offsetX;
        var y = e.offsetY;
        
        var line = document.createElementNS(namespace, "line");
        line.setAttribute("x1", prevX ? prevX: x);
        line.setAttribute("y1", prevY ? prevY: y);
        line.setAttribute("x2", x);
        line.setAttribute("y2", y);
        line.setAttribute("style", "stroke:dodgerblue; stroke-width:2");

        var circle = document.createElementNS(namespace, "circle");
        circle.setAttribute("cx", x);
        circle.setAttribute("cy", y);
        circle.setAttribute("r", "20");
        circle.setAttribute("fill", "firebrick");

        s.appendChild(circle);
        s.appendChild(line);

        prevX = x;
        prevY = y;
    }

    function clear() {
        while (s.firstChild) {
            s.removeChild(s.firstChild);
        }
        prevX = prevY = undefined;
    }

    s.addEventListener("click", clickHandler);
    c.addEventListener("click", clear);
}

window.onload = main;
