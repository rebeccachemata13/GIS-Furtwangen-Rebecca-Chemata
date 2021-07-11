import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";


export namespace Prüfungsabgabe {

    let _url: string = "mongodb+srv://rebecca:re12345@rebeccachemata.tjtcc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    //let _url: string = "mongodb://localhost:27017";

    interface Bild {
        title: string;
        url: string;
    }
    interface Gamer {
        name: string;
        time: string;
    }


    console.log("Starting server");
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);


    function handleListen(): void {
        console.log("I'm listening"); // Listening wird in der Konsole ausgegeben
    }
    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");


        console.log(_request.url);
        if (_request.url) {

            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let pathname: string = <string>url.pathname;
            let bildBeispiel: Bild = { title: url.query.title + "", url: url.query.url + "" };
            //let gamerBeispiel: Gamer = { name: url.query.string + "", time: url.query.time + "" };

            if (pathname == "/sendBild") {
                let jsonString: string = JSON.stringify(url.query);

                console.log(jsonString);
                console.log(bildBeispiel);

                console.log("Database connected");
                sendData(bildBeispiel);

                _response.write(JSON.stringify(bildBeispiel));


            } else if (pathname == "/pasteBild") {
                _response.write(JSON.stringify(await pasteData()));

            } else if (pathname == "/deleteBild") {
                deleteData(bildBeispiel);
                _response.write(JSON.stringify(bildBeispiel));
            }
            else if (pathname == "/pasteGamer") {
                _response.write(JSON.stringify(await pasteDataGamer()));

            }
            async function sendData(_b: Bild): Promise<void> {
                let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
                let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
                await mongoClient.connect();
                console.log("Database send");
                let bilder: Mongo.Collection = mongoClient.db("Memory").collection("Bilder");
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
            async function pasteData(): Promise<Bild[]> {
                let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
                let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
                await mongoClient.connect();
                console.log("Database paste");
                let bilder: Mongo.Collection = mongoClient.db("Memory").collection("Bilder");
                let cursor: Mongo.Cursor = bilder.find();
                let ergebnis: Bild[] = await cursor.toArray();
                return ergebnis;
            }
            async function pasteDataGamer(): Promise<Gamer[]> {
                let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
                let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
                await mongoClient.connect();
                console.log("Database paste Gamer");
                let bilder: Mongo.Collection = mongoClient.db("Memory").collection("Gamer");
                let cursor: Mongo.Cursor = bilder.find();
                let ergebnis: Gamer[] = await cursor.toArray();
                return ergebnis;
            }
            async function deleteData(_b: Bild): Promise<void> {
                let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
                let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
                await mongoClient.connect();
                console.log("Database delete");
                let bilder: Mongo.Collection = mongoClient.db("Memory").collection("Bilder");
                bilder.deleteOne({ "url": _b.url });

            }
        }
    }
}