"use strict";
var Abgabe2_3;
(function (Abgabe2_3) {
    //Aufgabe1:
    function getRandom(_min, _max) {
        return Math.floor(Math.random() * (_max - _min) + _min);
    }
    function createDiv() {
        let div = document.createElement("div");
        div.style.height = getRandom(5, 200).toString() + "px";
        div.style.width = getRandom(5, 200).toString() + "px";
        div.style.backgroundColor = `rgb(${getRandom(0, 255).toString()}, ${getRandom(0, 255).toString()}, ${getRandom(0, 255).toString()})`;
        div.classList.add("rect");
        document.body.appendChild(div);
    }
    createDiv();
    createDiv();
    document.querySelector("#neuesRechteck").addEventListener("click", createDiv);
    function reloadPage() {
        location.reload();
    }
    document.querySelector("#reloader").addEventListener("click", reloadPage);
})(Abgabe2_3 || (Abgabe2_3 = {}));
//# sourceMappingURL=script2.js.map