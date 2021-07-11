 namespace Prüfungsabgabe {

    interface Bild {
        title: string;
        url: string;
    }

    async function sendPictures(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);

        let _url: RequestInfo = "https://gis-sose-21.herokuapp.com";
        //let _url: RequestInfo = "http://localhost:8100";
        _url = _url + "/sendBild";
        console.log(_url);
        //tslint:disable-next-line
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "?" + query.toString();
        let response: Response = await fetch(_url);
        let bild: Bild = await response.json();
        console.log(bild);
        window.location.reload();
    }

    async function printAdminImages(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);

        let _url: RequestInfo = "https://gis-sose-21.herokuapp.com";
        //let _url: RequestInfo = "http://localhost:8100";
        _url = _url + "/pasteBild";
        console.log(_url);
        //tslint:disable-next-line
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "?" + query.toString();
        let response: Response = await fetch(_url);
        let antwort: Bild[] = await response.json();
        console.log(antwort);
        let memoryDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("admin-pictures");

        for (let i: number = 0; i < antwort.length; i++) {
            console.log("Test");
            let imagesDiv: HTMLDivElement = document.createElement("div");
            imagesDiv.classList.add("one-image-div");
            let image: HTMLImageElement = document.createElement("img");
            image.src = antwort[i].url;
            image.classList.add("admin-bild");
            let nameBild: HTMLParagraphElement = document.createElement("p");
            nameBild.innerHTML = antwort[i].title;
            let deleteButton: HTMLButtonElement = document.createElement("button");
            deleteButton.innerHTML = "DELETE";

            deleteButton.addEventListener("click", loeschen);

            function loeschen(): void {
                deleteimage(antwort[i]);
            }

            imagesDiv.appendChild(nameBild);
            imagesDiv.appendChild(image);
            imagesDiv.appendChild(deleteButton);
            memoryDiv.appendChild(imagesDiv);
        }
    }

    printAdminImages();
    document.querySelector("#submit-picture").addEventListener("click", sendPictures);
    
    async function deleteimage(_b: Bild): Promise<void> {
        let formData2: FormData = new FormData();
        formData2.append("url", _b.url);
        let _url: RequestInfo = "https://gis-sose-21.herokuapp.com";
        //let _url: RequestInfo = "http://localhost:8100";
        _url = _url + "/deleteBild";
        console.log(_url);
        //tslint:disable-next-line
        let query: URLSearchParams = new URLSearchParams(<any>formData2);
        _url = _url + "?" + query.toString();
        let response: Response = await fetch(_url);
        let bild: Bild = await response.json();
        console.log(bild);
        window.location.reload();
    }
}



















