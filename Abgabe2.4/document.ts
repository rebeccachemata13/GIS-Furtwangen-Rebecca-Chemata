namespace Abgabe2_4 {

    let myHamburger: HamburgerOptionen = convertToObject();

    function display(_arrayList: BurgerTeil[]): void {
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
        }
    }
    displayMeineAusgabe();
    
    function convertToObject(): HamburgerOptionen {
        let myHamburger: HamburgerOptionen = JSON.parse(burgerJSON);
        return myHamburger;
    }

}



