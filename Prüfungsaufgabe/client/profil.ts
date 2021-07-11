
namespace Prüfungsabgabe {
    interface Gamer {
        name: string;
        time: string;
    }
    
    let zeitDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("zeit-div");
    let para: HTMLParagraphElement = document.createElement("p");
    let zeitResult: string = sessionStorage.getItem("gestoppte Zeit");
    para.innerHTML = zeitResult;
    let name: HTMLInputElement = <HTMLInputElement>document.getElementById("name");
    let nameString: string = name.value;
    
    zeitDiv.appendChild(para);
    
    
    async function sendGamer(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        formData.append("name", nameString);
        formData.append("time", zeitResult);
        

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
        let button2: HTMLButtonElement = <HTMLButtonElement>document.getElementById("weiter-zu-score");
        button2.style.opacity = "1";
        
    }
    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submit");
    button.addEventListener("click", sendGamer);
}