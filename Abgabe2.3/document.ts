namespace Abgabe2_3 {
    function displayOberseite(): void {
        for (let i: number = 0; i < brotOberseiten.length; i++) {
            let imageContainer: HTMLDivElement = <HTMLDivElement>document.getElementById("image-container");

            let image: HTMLImageElement = document.createElement("img");
            image.setAttribute("src", brotOberseiten[i].imageUrl);
            image.setAttribute("id", brotOberseiten[i].imageId);
            image.addEventListener("click", onClick);
            image.setAttribute("width", "400px");
            image.classList.add("BrotOberseite");

            imageContainer.appendChild(image);
        }
    }
    displayOberseite();



    function onClick(_event: MouseEvent): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        for (let i: number = 0; i < brotOberseiten.length; i++) {
            if (target.id == brotOberseiten[i].imageId) {
                console.log(brotOberseiten[i].imageId);
                console.log("Knusprig: " + brotOberseiten[i].knusprig);
                console.log("Mit Sesam: " + brotOberseiten[i].mitSesam);
                console.log("Preis: " + brotOberseiten[i].preis + " Euro");

            }
        }
    }

}


