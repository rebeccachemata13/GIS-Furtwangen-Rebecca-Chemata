namespace Abgabe2_4 {

    let myHamburger: HamburgerOptionen = convertToObject();

    function displayOberseite(): void {
        for (let i: number = 0; i < myHamburger.brotOberseiten.length; i++) {
            let imageContainer: HTMLDivElement = <HTMLDivElement>document.getElementById("image-container");

            let image: HTMLImageElement = document.createElement("img");
            image.setAttribute("src", myHamburger.brotOberseiten[i].imageUrl);
            image.setAttribute("id", myHamburger.brotOberseiten[i].imageId);
            image.addEventListener("click", onClickOberseite);
            image.setAttribute("width", "400px");
            image.classList.add("BrotOberseite");

            imageContainer.appendChild(image);
        }
    }
    displayOberseite();
    function displaySalate(): void {
        for (let i: number = 0; i < myHamburger.salate.length; i++) {
            let imageContainer: HTMLDivElement = <HTMLDivElement>document.getElementById("image-container2");

            let image: HTMLImageElement = document.createElement("img");
            image.setAttribute("src", myHamburger.brotOberseiten[i].imageUrl);
            image.setAttribute("id", myHamburger.brotOberseiten[i].imageId);
            image.addEventListener("click", onClickSalate);
            image.setAttribute("width", "400px");
            image.classList.add("Salate");

            imageContainer.appendChild(image);
        }
    }
    displaySalate();
    function displayFleisch(): void {
        for (let i: number = 0; i < myHamburger.brotOberseiten.length; i++) {
            let imageContainer: HTMLDivElement = <HTMLDivElement>document.getElementById("image-container3");

            let image: HTMLImageElement = document.createElement("img");
            image.setAttribute("src", myHamburger.brotOberseiten[i].imageUrl);
            image.setAttribute("id", myHamburger.brotOberseiten[i].imageId);
            image.addEventListener("click", onClickFleisch);
            image.setAttribute("width", "400px");
            image.classList.add("Fleisch");

            imageContainer.appendChild(image);
        }
    }
    displayFleisch();
    function displayUnterseite(): void {
        for (let i: number = 0; i < myHamburger.brotOberseiten.length; i++) {
            let imageContainer: HTMLDivElement = <HTMLDivElement>document.getElementById("image-container4");

            let image: HTMLImageElement = document.createElement("img");
            image.setAttribute("src", myHamburger.brotOberseiten[i].imageUrl);
            image.setAttribute("id", myHamburger.brotOberseiten[i].imageId);
            image.addEventListener("click", onClickUnterseite);
            image.setAttribute("width", "400px");
            image.classList.add("BrotUnterseite");

            imageContainer.appendChild(image);
        }
    }
    displayUnterseite();



    function onClickOberseite(_event: MouseEvent): void {

        let target: HTMLElement = <HTMLElement>_event.target;
        for (let i: number = 0; i < myHamburger.brotOberseiten.length; i++) {
            if (target.id == myHamburger.brotOberseiten[i].imageId) {
                console.log(myHamburger.brotOberseiten[i].imageId);
                console.log("Knusprig: " + myHamburger.brotOberseiten[i].knusprig);
                console.log("Mit Sesam: " + myHamburger.brotOberseiten[i].mitSesam);
                console.log("Preis: " + myHamburger.brotOberseiten[i].preis + " Euro");


            }
        }
    }

    function onClickSalate(_event: MouseEvent): void {

        let target: HTMLElement = <HTMLElement>_event.target;
        for (let i: number = 0; i < myHamburger.salate.length; i++) {
            if (target.id == myHamburger.salate[i].imageId) {
                console.log(myHamburger.salate[i].imageId);
                console.log("Mit Tomaten: " + myHamburger.salate[i].mitTomaten);
                console.log("Mit Zwiebeln: " + myHamburger.salate[i].mitZwiebeln);
                console.log("Preis: " + myHamburger.salate[i].preis + " Euro");

            }
        }
    }

    function onClickFleisch(_event: MouseEvent): void {

        let target: HTMLElement = <HTMLElement>_event.target;
        for (let i: number = 0; i < myHamburger.fleischMöglichkeiten.length; i++) {
            if (target.id == myHamburger.fleischMöglichkeiten[i].imageId) {
                console.log(myHamburger.fleischMöglichkeiten[i].imageId);
                console.log("Vegetarisch: " + myHamburger.fleischMöglichkeiten[i].vegetarisch);
                console.log("Mit Sesam: " + myHamburger.fleischMöglichkeiten[i].Fleischart);
                console.log("Preis: " + myHamburger.fleischMöglichkeiten[i].preis + " Euro");

            }
        }
    }

    function onClickUnterseite(_event: MouseEvent): void {

        let target: HTMLElement = <HTMLElement>_event.target;
        for (let i: number = 0; i < myHamburger.unterBrotseiten.length; i++) {
            if (target.id == myHamburger.unterBrotseiten [i].imageId) {
                console.log(myHamburger.unterBrotseiten[i].imageId);
                console.log("Knusprig: " + myHamburger.unterBrotseiten[i].knusprig);
                console.log("Mit Sesam: " + myHamburger.unterBrotseiten[i].mitSesam);
                console.log("Preis: " + myHamburger.unterBrotseiten[i].preis + " Euro");

            }
        }
    }


    function convertToObject(): HamburgerOptionen {
        let myHamburger: HamburgerOptionen = JSON.parse(burgerJSON);
        return myHamburger;
    }

}


