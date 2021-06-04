"use strict";
var P_3_1Server;
(function (P_3_1Server) {
    async function sendDataAlsHTML() {
        let formData = new FormData(document.forms[0]);
        let _url = "https://gis-sose-21.herokuapp.com";
        _url = _url + "/html";
        console.log(_url);
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        let response = await fetch(_url);
        let antwort = await response.text();
        console.log(antwort);
        let para = document.createElement("p");
        para.innerHTML = antwort;
        document.body.appendChild(para);
    }
    async function sendDataAlsJSON() {
        let formData = new FormData(document.forms[0]);
        let _url = "https://gis-sose-21.herokuapp.com";
        _url = _url + "/json";
        console.log(_url);
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        let response = await fetch(_url);
        let antwortVomServer = await response.json();
        console.log(antwortVomServer);
    }
    document.querySelector("#html").addEventListener("click", sendDataAlsHTML);
    document.querySelector("#json").addEventListener("click", sendDataAlsJSON);
})(P_3_1Server || (P_3_1Server = {}));
//# sourceMappingURL=script.js.map