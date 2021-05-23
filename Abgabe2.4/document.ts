namespace Abgabe2_4 {


    async function loadJSON(_url: RequestInfo): Promise<HamburgerOptionen> {
        let response: Response = await fetch(_url);
        console.log("Response", response);
        let myBurger: HamburgerOptionen = await response.json();
        console.log(myBurger);
        return myBurger;


    }

    async function inicial(): Promise<void> {
        let myHamburger: HamburgerOptionen = await loadJSON("https://rebeccachemata13.github.io/GIS-SoSe-2021/Abgabe2.4/data2.json");

        if (document.querySelector("title").getAttribute("id") == "First") {
            display(myHamburger.brotOberseiten);
        }

        else if (document.querySelector("title").getAttribute("id") == "Second") {
            display(myHamburger.salate);
        }

        else if (document.querySelector("title").getAttribute("id") == "Third") {
            display(myHamburger.fleischMöglichkeiten);
        }

        else if (document.querySelector("title").getAttribute("id") == "Fourth") {
            display(myHamburger.unterBrotseiten);
        }
        displayMeineAusgabe();
    }

    inicial();
    
    
    async function display(_arrayList: BurgerTeil[]): Promise<void> {

        for (let i: number = 0; i < _arrayList.length; i++) {
            let imageContainer: HTMLDivElement = <HTMLDivElement>document.getElementById("image-container");

            let image: HTMLImageElement = document.createElement("img");
            image.setAttribute("src", _arrayList[i].imageUrl);
            image.setAttribute("id", _arrayList[i].imageId);
            image.addEventListener("click", onClick);
            image.setAttribute("width", "400px");
            image.classList.add("images");
            imageContainer.appendChild(image);
        }
    }
    
    function onClick(_event: Event): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        target.style.border = "2px solid black";

        if (document.querySelector("title").getAttribute("id") == "First") {
            sessionStorage.setItem("image1", target.getAttribute("src"));
            console.log(target);

        }
        else if (document.querySelector("title").getAttribute("id") == "Second") {
            sessionStorage.setItem("image2", target.getAttribute("src"));
            console.log(target);
        }
        else if (document.querySelector("title").getAttribute("id") == "Third") {
            sessionStorage.setItem("image3", target.getAttribute("src"));
            console.log(target);
        }
        else if (document.querySelector("title").getAttribute("id") == "Fourth") {
            sessionStorage.setItem("image4", target.getAttribute("src"));
            console.log(target);
        }
        else if (document.querySelector("title").getAttribute("id") == "fifth") {
            communicate("https://gis-communication.herokuapp.com");
        }
    }

    function displayMeineAusgabe(): void {

        let meineAusgabe: HTMLDivElement = <HTMLDivElement>document.getElementById("ausgabe-div");
        let image1: HTMLImageElement = document.createElement("img");
        let image2: HTMLImageElement = document.createElement("img");
        let image3: HTMLImageElement = document.createElement("img");
        let image4: HTMLImageElement = document.createElement("img");


        if (document.querySelector("title").getAttribute("id") == "Second") {
            image1.setAttribute("src", sessionStorage.getItem("image1"));
            meineAusgabe.appendChild(image1);
        }
        else if (document.querySelector("title").getAttribute("id") == "Third") {
            image1.setAttribute("src", sessionStorage.getItem("image1"));
            image2.setAttribute("src", sessionStorage.getItem("image2"));
            meineAusgabe.appendChild(image1);
            meineAusgabe.appendChild(image2);


        }
        else if (document.querySelector("title").getAttribute("id") == "Fourth") {
            image1.setAttribute("src", sessionStorage.getItem("image1"));
            image2.setAttribute("src", sessionStorage.getItem("image2"));
            image3.setAttribute("src", sessionStorage.getItem("image3"));
            meineAusgabe.appendChild(image1);
            meineAusgabe.appendChild(image2);
            meineAusgabe.appendChild(image3);
        }
        else if (document.querySelector("title").getAttribute("id") == "fifth") {
            let meinErgebnis: HTMLDivElement = <HTMLDivElement>document.getElementById("mein-Ergebnis");
            image1.setAttribute("src", sessionStorage.getItem("image1"));
            image2.setAttribute("src", sessionStorage.getItem("image2"));
            image3.setAttribute("src", sessionStorage.getItem("image3"));
            image4.setAttribute("src", sessionStorage.getItem("image4"));

            meinErgebnis.appendChild(image1);
            meinErgebnis.appendChild(image2);
            meinErgebnis.appendChild(image3);
            meinErgebnis.appendChild(image4);

            printMessage();
        }

    }
    
    
    async function printMessage(): Promise<void> {

        let p: HTMLParagraphElement = document.createElement("p");
        p.style.backgroundColor = "white";
        p.style.padding = "5px";
        p.style.fontSize = "x-large";

        let empfangenesObjekt: KonsoleMessage = await communicate("https://gis-communication.herokuapp.com");
        p.innerHTML = empfangenesObjekt.message;
        
        if (empfangenesObjekt.message == undefined) {
            p.innerHTML = empfangenesObjekt.error;
            p.style.color = "red";
        
        }
        else {
        p.innerHTML = empfangenesObjekt.message;
        p.style.color = "green"; 
        }
        document.body.appendChild(p);


    }

    async function communicate(_url: RequestInfo): Promise<KonsoleMessage> {
        let query: URLSearchParams = new URLSearchParams(sessionStorage);
        console.log(query.toString());
        _url = _url + "?" + query.toString();
        let response: Response = await fetch(_url);
        let s: KonsoleMessage = await response.json();
        console.log(s);
        return s;



    }
    






}



