namespace Prüfungsabgabe {
    interface Gamer {
        name: string;
        time: string;
    }
    
    let zeitDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("zeit-div");
    let para: HTMLParagraphElement = document.createElement("p");
    para.innerHTML = sessionStorage.getItem("gestoppte Zeit");
    zeitDiv.appendChild(para);
    
    async function sendGamer(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);

        let _url: RequestInfo = "https://gis-sose-21.herokuapp.com";
        //let _url: RequestInfo = "http://localhost:8100";
        _url = _url + "/sendGamer";
        console.log(_url);
        //tslint:disable-next-line
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "?" + query.toString();
        let response: Response = await fetch(_url);
        let bild: Gamer = await response.json();
        console.log(bild);
        window.location.reload();
    }
    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submit");
    button.addEventListener("click", sendGamer);
}