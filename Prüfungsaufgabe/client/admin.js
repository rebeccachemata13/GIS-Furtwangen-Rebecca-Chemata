"use strict";
var Prüfungsabgabe;
(function (Prüfungsabgabe) {
    async function sendPictures() {
        let formData = new FormData(document.forms[0]);
        let _url = "https://gis-sose-21.herokuapp.com";
        //let _url: RequestInfo = "http://localhost:8100";
        _url = _url + "/sendBild";
        console.log(_url);
        //tslint:disable-next-line
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        let response = await fetch(_url);
        let bild = await response.json();
        console.log(bild);
        window.location.reload();
    }
    async function printAdminImages() {
        let formData = new FormData(document.forms[0]);
        let _url = "https://gis-sose-21.herokuapp.com";
        //let _url: RequestInfo = "http://localhost:8100";
        _url = _url + "/pasteBild";
        console.log(_url);
        //tslint:disable-next-line
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        let response = await fetch(_url);
        let antwort = await response.json();
        console.log(antwort);
        let memoryDiv = document.getElementById("admin-pictures");
        for (let i = 0; i < antwort.length; i++) {
            console.log("Test");
            let imagesDiv = document.createElement("div");
            imagesDiv.classList.add("one-image-div");
            let image = document.createElement("img");
            image.src = antwort[i].url;
            image.classList.add("admin-bild");
            let nameBild = document.createElement("p");
            nameBild.innerHTML = antwort[i].title;
            let deleteButton = document.createElement("button");
            deleteButton.innerHTML = "DELETE";
            deleteButton.addEventListener("click", loeschen);
            function loeschen() {
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
    async function deleteimage(_b) {
        let formData2 = new FormData();
        formData2.append("url", _b.url);
        let _url = "https://gis-sose-21.herokuapp.com";
        //let _url: RequestInfo = "http://localhost:8100";
        _url = _url + "/deleteBild";
        console.log(_url);
        //tslint:disable-next-line
        let query = new URLSearchParams(formData2);
        _url = _url + "?" + query.toString();
        let response = await fetch(_url);
        let bild = await response.json();
        console.log(bild);
        window.location.reload();
    }
})(Prüfungsabgabe || (Prüfungsabgabe = {}));
//# sourceMappingURL=admin.js.map