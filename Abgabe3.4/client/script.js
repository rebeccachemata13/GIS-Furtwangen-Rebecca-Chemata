"use strict";
var P_3_4Server;
(function (P_3_4Server) {
    async function print() {
        let formData = new FormData(document.forms[0]);
        let _url = "https://gis-sose-21.herokuapp.com";
        //let _url: RequestInfo = "http://localhost:8100";
        _url = _url + "/paste";
        console.log(_url);
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        let response = await fetch(_url);
        let antwort = await response.json();
        console.log(antwort);
        let para = document.createElement("p");
        para.innerHTML = JSON.stringify(antwort);
        document.body.appendChild(para);
    }
    async function send() {
        let formData = new FormData(document.forms[0]);
        let _url = "https://gis-sose-21.herokuapp.com";
        //let _url: RequestInfo = "http://localhost:8100";
        _url = _url + "/send";
        console.log(_url);
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        let response = await fetch(_url);
        let benutzer = await response.json();
        console.log(benutzer);
    }
    document.querySelector("#print").addEventListener("click", print);
    document.querySelector("#send").addEventListener("click", send);
})(P_3_4Server || (P_3_4Server = {}));
//# sourceMappingURL=script.js.map