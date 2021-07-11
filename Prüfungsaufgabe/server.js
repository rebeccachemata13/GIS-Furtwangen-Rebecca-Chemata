"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prüfungsabgabe = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Prüfungsabgabe;
(function (Prüfungsabgabe) {
    let _url = "mongodb+srv://rebecca:re12345@rebeccachemata.tjtcc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("I'm listening"); // Listening wird in der Konsole ausgegeben
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        console.log(_request.url);
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let pathname = url.pathname;
            let bildBeispiel = { title: url.query.title + "", url: url.query.url + "" };
            //let gamerBeispiel: Gamer = { name: url.query.string + "", time: url.query.time + "" };
            if (pathname == "/sendBild") {
                let jsonString = JSON.stringify(url.query);
                console.log(jsonString);
                console.log(bildBeispiel);
                console.log("Database connected");
                sendData(bildBeispiel);
                _response.write(JSON.stringify(bildBeispiel));
            }
            else if (pathname == "/pasteBild") {
                _response.write(JSON.stringify(await pasteData()));
            }
            else if (pathname == "/deleteBild") {
                deleteData(bildBeispiel);
                _response.write(JSON.stringify(bildBeispiel));
            }
            else if (pathname == "/pasteGamer") {
                _response.write(JSON.stringify(await pasteDataGamer()));
            }
            async function sendData(_b) {
                let options = { useNewUrlParser: true, useUnifiedTopology: true };
                let mongoClient = new Mongo.MongoClient(_url, options);
                await mongoClient.connect();
                console.log("Database send");
                let bilder = mongoClient.db("Memory").collection("Bilder");
                bilder.insertOne(_b);
            }
            //async function sendGamer(_g: Gamer): Promise<void> {
            //let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
            //let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
            //await mongoClient.connect();
            //console.log("Database send Gamer");
            //let bilder: Mongo.Collection = mongoClient.db("Memory").collection("Gamer");
            //bilder.insertOne(_g);
            // }
            async function pasteData() {
                let options = { useNewUrlParser: true, useUnifiedTopology: true };
                let mongoClient = new Mongo.MongoClient(_url, options);
                await mongoClient.connect();
                console.log("Database paste");
                let bilder = mongoClient.db("Memory").collection("Bilder");
                let cursor = bilder.find();
                let ergebnis = await cursor.toArray();
                return ergebnis;
            }
            async function pasteDataGamer() {
                let options = { useNewUrlParser: true, useUnifiedTopology: true };
                let mongoClient = new Mongo.MongoClient(_url, options);
                await mongoClient.connect();
                console.log("Database paste Gamer");
                let bilder = mongoClient.db("Memory").collection("Gamer");
                let cursor = bilder.find();
                let ergebnis = await cursor.toArray();
                return ergebnis;
            }
            async function deleteData(_b) {
                let options = { useNewUrlParser: true, useUnifiedTopology: true };
                let mongoClient = new Mongo.MongoClient(_url, options);
                await mongoClient.connect();
                console.log("Database delete");
                let bilder = mongoClient.db("Memory").collection("Bilder");
                bilder.deleteOne({ "url": _b.url });
            }
        }
    }
})(Prüfungsabgabe = exports.Prüfungsabgabe || (exports.Prüfungsabgabe = {}));
//# sourceMappingURL=server.js.map