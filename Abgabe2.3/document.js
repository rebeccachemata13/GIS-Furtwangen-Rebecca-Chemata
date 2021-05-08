"use strict";
var Abgabe2_3;
(function (Abgabe2_3) {
    function displayOberseite() {
        for (let i = 0; i < Abgabe2_3.brotOberseiten.length; i++) {
            let imageContainer = document.getElementById("image-container");
            let image = document.createElement("img");
            image.setAttribute("src", Abgabe2_3.brotOberseiten[i].imageUrl);
            image.setAttribute("id", Abgabe2_3.brotOberseiten[i].imageId);
            image.addEventListener("click", onClick);
            image.setAttribute("width", "400px");
            image.classList.add("BrotOberseite");
            imageContainer.appendChild(image);
        }
    }
    displayOberseite();
    function onClick(_event) {
        let target = _event.target;
        for (let i = 0; i < Abgabe2_3.brotOberseiten.length; i++) {
            if (target.id == Abgabe2_3.brotOberseiten[i].imageId) {
                console.log(Abgabe2_3.brotOberseiten[i].imageId);
                console.log("Knusprig: " + Abgabe2_3.brotOberseiten[i].knusprig);
                console.log("Mit Sesam: " + Abgabe2_3.brotOberseiten[i].mitSesam);
                console.log("Preis: " + Abgabe2_3.brotOberseiten[i].preis + " Euro");
            }
        }
    }
})(Abgabe2_3 || (Abgabe2_3 = {}));
//# sourceMappingURL=document.js.map