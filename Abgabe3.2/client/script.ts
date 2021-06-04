

namespace P_3_1Server {

    async function sendDataAlsHTML(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);

        let _url: RequestInfo = "https://gis-sose-21.herokuapp.com"; 
        
        _url = _url + "/html";
        console.log(_url);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "?" + query.toString();
        let response: Response = await fetch(_url);
        let antwort: string = await response.text();
        console.log(antwort);
        let para: HTMLParagraphElement = document.createElement("p");
        para.innerHTML = antwort;
        document.body.appendChild(para);



    }
    async function sendDataAlsJSON(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);

        let _url: RequestInfo = "https://gis-sose-21.herokuapp.com"; 
        
        _url = _url + "/json";
        console.log(_url);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "?" + query.toString();
        let response: Response = await fetch(_url);
        let antwortVomServer: ServerAntwort = await response.json();
        console.log(antwortVomServer);
        



    }
    document.querySelector("#html").addEventListener("click", sendDataAlsHTML);
    document.querySelector("#json").addEventListener("click", sendDataAlsJSON);

    interface ServerAntwort {
        fname: string;
        lname: string;
        adress: string;
        mail: string;

    }

    
}


    

