"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_2 = void 0;
const Http = require("http");
const Url = require("url");
var P_3_2;
(function (P_3_2) {
    console.log("Starting server"); //Starting server wird ausgegeben
    let port = Number(process.env.PORT);
    if (!port) //Port == "Hafen"
        port = 8100; //Port wird mit dem Wert 8100 initialisiert
    let server = Http.createServer(); //Server wird erstellt
    server.addListener("request", handleRequest); //Dem Server wird ein Listener angehängt, der die Funktion handleRequest aufruft
    server.addListener("listening", handleListen); //Dem Server wird ein Listener angehängt, der die Funktion handleListen aufruft
    server.listen(port); //Der Server hört auf den port
    function handleListen() {
        console.log("Listening"); // Listening wird in der Konsole ausgegeben
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //I hear voices wird im Terminal ausgegeben
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Die Eigenschaften des Headers werden festgelegt mit setHeader
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Zugangsberechtigung wird festgelegt, wer hat Zugriff?
        console.log(_request.url); //Die URL vom Request wird ausgegeben
        //Adresse parsen (umwandeln):
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let pathname = url.pathname;
            if (pathname == "/json") {
                let jsonString = JSON.stringify(url.query);
                console.log(jsonString);
                _response.write(jsonString);
            }
            else if (pathname == "/html") {
                for (let key in url.query) {
                    _response.write(key + ":" + url.query[key] + "<br/>");
                }
            }
        }
        console.log(_request.url); //Die URL vom Request wird ausgegeben
        _response.end(); //Die Response wird beendet
    }
})(P_3_2 = exports.P_3_2 || (exports.P_3_2 = {}));
//# sourceMappingURL=server.js.map