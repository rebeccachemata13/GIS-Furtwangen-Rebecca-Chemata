"use strict";
var P_3_1Server;
(function (P_3_1Server) {
    async function sendData() {
        let formData = new FormData(document.forms[0]);
        console.log(": " + formData.get("name"));
        for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
        let query = new URLSearchParams(formData);
        let _url = "https://gis-sose-21.herokuapp.com/";
        _url = _url + "?" + query.toString();
        console.log(_url);
        let response = await fetch(_url);
        let antwort = await response.text();
        console.log(antwort);
        let para = document.createElement("p");
        para.innerText = _url;
        document.body.appendChild(para);
    }
    document.querySelector("#abschick-knopf").addEventListener("click", sendData);
})(P_3_1Server || (P_3_1Server = {}));
//# sourceMappingURL=script.js.map