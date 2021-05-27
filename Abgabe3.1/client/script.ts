namespace P_3_1Server {

    async function sendData(_url: RequestInfo): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        console.log(": " + formData.get("name"));
        for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
        
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "?" + query.toString();
        console.log(_url);
        let response: Response = await fetch(_url);
        console.log(response);

    }
    sendData("http://127.0.0.1:5500/Abgabe3.1/server/server.js");
}