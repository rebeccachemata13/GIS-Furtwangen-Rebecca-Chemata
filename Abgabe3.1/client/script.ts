

namespace P_3_1Server {

    async function sendData(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        console.log(": " + formData.get("name"));
        for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
        
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let _url: RequestInfo = "https://gis-sose-21.herokuapp.com/";                                    
        _url = _url + "?" + query.toString();
        console.log(_url);
        let response: Response = await fetch(_url);
        let antwort: string = await response.text();
        console.log(antwort);
        let para: HTMLParagraphElement = document.createElement("p");
        para.innerText = antwort;
        document.body.appendChild(para);
        
        

    }
    
    document.querySelector("#abschick-knopf").addEventListener("click", sendData);
    
}
