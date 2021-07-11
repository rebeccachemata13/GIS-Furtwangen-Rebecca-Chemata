"use strict";
var Prüfungsabgabe;
(function (Prüfungsabgabe) {
    let zeitDiv = document.getElementById("zeit-div");
    let para = document.createElement("p");
    let zeitResult = sessionStorage.getItem("gestoppte Zeit");
    para.innerHTML = zeitResult;
    let name = document.getElementById("name");
    let nameString = name.value;
    zeitDiv.appendChild(para);
    async function sendGamer() {
        let formData = new FormData(document.forms[0]);
        formData.append("name", nameString);
        formData.append("time", zeitResult);
        let _url = "https://gis-sose-21.herokuapp.com";
        //let _url: RequestInfo = "http://localhost:8100";
        _url = _url + "/sendGamer";
        console.log(_url);
        //tslint:disable-next-line
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        let response = await fetch(_url);
        let bild = await response.json();
        console.log(bild);
        let button2 = document.getElementById("weiter-zu-score");
        button2.style.opacity = "1";
    }
    let button = document.getElementById("submit");
    button.addEventListener("click", sendGamer);
})(Prüfungsabgabe || (Prüfungsabgabe = {}));
//# sourceMappingURL=profil.js.map