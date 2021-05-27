"use strict";
var P_3_1Server;
(function (P_3_1Server) {
    async function sendData(_url) {
        let formData = new FormData(document.forms[0]);
        console.log(": " + formData.get("name"));
        for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        console.log(_url);
        let response = await fetch(_url);
        console.log(response);
    }
    sendData("http://127.0.0.1:5500/Abgabe3.1/server/server.js");
})(P_3_1Server || (P_3_1Server = {}));
//# sourceMappingURL=script.js.map