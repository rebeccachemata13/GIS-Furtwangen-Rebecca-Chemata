
namespace Prüfungsabgabe {
    interface Bild {
        title: string;
        url: string;
    }

    let counter: number = 0;
    let paarCounter: number = 0;
    let kardArray: string[] = [];
    let meinTimer: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("timer-para");
    let gestoppteZeit: number = 0;
    let letzterDurchlauf: Date = new Date();
    let letzterDurchlaufNumber: number = letzterDurchlauf.getTime();
    let pausiert: boolean = true;

    function hochzaehlen(): void {
        pausiert = false;
        if (pausiert === false) {
            let aktuelleZeit: Date = new Date();
            let aktuelleZeitNumber: number = aktuelleZeit.getTime();
            gestoppteZeit = aktuelleZeitNumber - letzterDurchlaufNumber;
            aktualisiereAnzeige();
        }

        setTimeout(hochzaehlen, 1);
    }
    function aktualisiereAnzeige(): void {
        meinTimer.innerHTML = millitoMin2(gestoppteZeit);
    }
    function stoppeZeit(): void {
        pausiert = true;
        sessionStorage.setItem("gestoppte Zeit", gestoppteZeit.toString());
        window.open("profile.html");
        window.close();
    }
    function millitoMin2(_millisekunden: number): string {
        
        let millisekunden: string | number = _millisekunden % 1000;
        let sekunden: string | number = Math.floor(_millisekunden / 1000) % 60;
        let minuten: string | number = Math.floor(_millisekunden / 60000) % 60;

        minuten = minuten < 10 ? "0" + minuten : minuten;
        sekunden = sekunden < 10 ? "0" + sekunden : sekunden;
        millisekunden = (millisekunden + "000").slice(0, 3);

        return  minuten + ":" + sekunden + ":" + millisekunden;
    }


    async function printMemoryImages(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);

        let _url: RequestInfo = "https://gis-sose-21.herokuapp.com";
        //let _url: RequestInfo = "http://localhost:8100";
        _url = _url + "/pasteBild";

        //tslint:disable-next-line
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "?" + query.toString();
        let response: Response = await fetch(_url);
        let antwort: Bild[] = await response.json();

        console.log(antwort);

        let memoryDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("memory-div");
        let urlArray: Bild[] = [];
        let v: number = 0;

        while (antwort.length / 2 > v) {
            let index: number = Math.round(Math.random() * (antwort.length));

            if (urlArray.includes(antwort[index]) == false) {
                urlArray.push(antwort[index]);
                v++;
            }

        }
        console.log(urlArray);

        let bilderArray: Bild[] = [];


        for (let i: number = 0; i < urlArray.length; i++) {
            bilderArray[i] = urlArray[i];
        }

        for (let j: number = 0; j < urlArray.length; j++) {
            bilderArray[j + urlArray.length] = urlArray[j];
        }
        console.log(bilderArray);

        for (let k: number = 0; k < bilderArray.length; k++) {
            let memorykartenDiv: HTMLDivElement = document.createElement("div");
            let defaultPictureDiv: HTMLDivElement = document.createElement("div");

            memorykartenDiv.classList.add("einzelnes-div-für-memorykarte");
            let imageMemory: HTMLImageElement = document.createElement("img");
            let defaultPicture: HTMLImageElement = document.createElement("img");
           
            imageMemory.src = bilderArray[k].url;
            imageMemory.id = bilderArray[k].title + k + "front";
           
            imageMemory.classList.add("memory-bild-front");
            defaultPicture.src = "https://i.pinimg.com/474x/87/20/0b/87200b400e6d74b8e17a22f93e17f95e.jpg";
            defaultPicture.classList.add("default-picture-back");
            defaultPicture.id = bilderArray[k].title +  k;
            defaultPicture.addEventListener("click", speicherUrl);
            
            
            defaultPictureDiv.appendChild(defaultPicture);
            memorykartenDiv.appendChild(imageMemory);
            memoryDiv.appendChild(memorykartenDiv);
            memoryDiv.append(defaultPictureDiv);
        }
    }
    printMemoryImages();
    hochzaehlen();


    function speicherUrl(_event: Event): void {
        let target: HTMLImageElement = <HTMLImageElement>_event.target;
        console.log(target.id);
       
        target.style.opacity = "0";
        counter++;
        console.log(counter);

        kardArray.push(target.id);
        console.log(kardArray);

        if (counter == 2) {
            target.style.opacity = "0";
            counter = 0;
            consequenz(kardArray);

        }

    }
    
    function consequenz(_b: string[]): void {
        console.log(_b);
        //console.log(<HTMLImageElement>_b[0].previousElementSibling.src);
        let pictureUnder: HTMLImageElement = <HTMLImageElement> document.getElementById(_b[0] + "front");
        let pictureUnder2: HTMLImageElement = <HTMLImageElement> document.getElementById(_b[1] + "front");
        let pictureUpper: HTMLImageElement = <HTMLImageElement> document.getElementById(_b[0]);
        let pictureUpper2: HTMLImageElement = <HTMLImageElement> document.getElementById(_b[1]);

        console.log(pictureUnder);
        console.log(pictureUnder2);
        
        if (pictureUnder.src == pictureUnder2.src) {
            paarCounter++;
            console.log(paarCounter);
            pictureUnder.style.opacity = "0";
            pictureUnder2.style.opacity = "0";
            kardArray = [];
            } else {
            console.log("Kein Paar");

            pictureUpper.style.opacity = "1";
            pictureUpper2.style.opacity = "1";
            kardArray = [];
        }

        if (paarCounter == 8) {
            console.log("Keine Paare mehr");
            stoppeZeit();
        }

    }



}






