
namespace Prüfungsabgabe {
    interface Bild {
        title: string;
        url: string;
    }

    let counter: number = 0;
    let paarCounter: number = 0;
    let kardArray: HTMLDivElement[] = [];
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
        let millisekunden: string | number = gestoppteZeit % 1000;
        let sekunden: string | number = Math.floor(gestoppteZeit / 1000) % 60;
        let minuten: string | number = Math.floor(gestoppteZeit / 60000) % 60;

        minuten = minuten < 10 ? "0" + minuten : minuten;
        sekunden = sekunden < 10 ? "0" + sekunden : sekunden;
        millisekunden = (millisekunden + "000").slice(0, 3);

        meinTimer.innerHTML = minuten + ":" + sekunden + ":" + millisekunden;
    }
    function stoppeZeit(): void {
        pausiert = true;
        sessionStorage.setItem("gestoppte Zeit", gestoppteZeit.toString());
        window.open("profile.html");
        window.close();
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
            memorykartenDiv.addEventListener("click", speicherUrl);
            memorykartenDiv.classList.add("einzelnes-div-für-memorykarte");
            let imageMemory: HTMLImageElement = document.createElement("img");
            let defaultPicture: HTMLImageElement = document.createElement("img");
            imageMemory.src = bilderArray[k].url;
            imageMemory.id = bilderArray[k].title;
            defaultPicture.src = "images/rotes_fragezeichen.jpg";
            defaultPicture.classList.add("default-picture");
            imageMemory.classList.add("memory-bild");

            //memorykartenDiv.appendChild(defaultPicture);
            memorykartenDiv.appendChild(imageMemory);

            memoryDiv.appendChild(memorykartenDiv);
        }
    }
    printMemoryImages();
    hochzaehlen();


    function speicherUrl(_event: Event): void {
        //flipcard()
        counter++;
        console.log(counter);
        let target: HTMLDivElement = <HTMLDivElement>_event.target;
        kardArray.push(target);
        console.log(kardArray);

        if (counter == 2) {
            counter = 0;

            consequenz(kardArray);

        }

    }
    function consequenz(_b: HTMLDivElement[]): void {
        console.log(_b);

        if (_b[0].id == _b[1].id) {
            paarCounter++;
            console.log(paarCounter);
            for (let i: number = 0; i < _b.length; i++) {
                _b[1].style.opacity = "0";
                _b[0].style.opacity = "0";
                _b[1].addEventListener("click", speicherUrl);
                _b[0].addEventListener("click", speicherUrl);

                if (paarCounter == 5) {
                    console.log("Keine Paare mehr");
                    stoppeZeit();
                }
                kardArray = [];
                return;
            }
        }
        console.log("Kein Paar");
        kardArray = [];
        if (paarCounter == 5) {
            console.log("Keine Paare mehr");
        }
        //else flipcard()
    }



}






