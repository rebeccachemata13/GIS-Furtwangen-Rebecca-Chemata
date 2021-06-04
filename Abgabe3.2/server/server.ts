import * as Http from "http";
import * as Url from "url";



export namespace P_3_2 {
    console.log("Starting server"); //Starting server wird ausgegeben
    let port: number = Number(process.env.PORT);
    if (!port) //Port == "Hafen"
        port = 8100; //Port wird mit dem Wert 8100 initialisiert

    let server: Http.Server = Http.createServer(); //Server wird erstellt
    server.addListener("request", handleRequest); //Dem Server wird ein Listener angehängt, der die Funktion handleRequest aufruft
    server.addListener("listening", handleListen); //Dem Server wird ein Listener angehängt, der die Funktion handleListen aufruft
    server.listen(port); //Der Server hört auf den port


    function handleListen(): void {
        console.log("Listening"); // Listening wird in der Konsole ausgegeben
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!"); //I hear voices wird im Terminal ausgegeben
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Die Eigenschaften des Headers werden festgelegt mit setHeader
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Zugangsberechtigung wird festgelegt, wer hat Zugriff?
       

        console.log(_request.url); //Die URL vom Request wird ausgegeben
        //Adresse parsen (umwandeln):
        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let pathname: string = <string> url.pathname;
            if (pathname == "/json") {
                let jsonString: string = JSON.stringify(url.query);
                console.log(jsonString);
                _response.write(jsonString);

            } else if (pathname == "/html") {
                for (let key in url.query) {
                    _response.write(key + ":" + url.query[key] + "<br/>");
                }
            }

        }

        console.log(_request.url); //Die URL vom Request wird ausgegeben

        _response.end(); //Die Response wird beendet
    }

}