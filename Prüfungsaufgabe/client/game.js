"use strict";
var Prüfungsabgabe;
(function (Prüfungsabgabe) {
    let counter = 0;
    let paarCounter = 0;
    let kardArray = [];
    let meinTimer = document.getElementById("timer-para");
    let gestoppteZeit = 0;
    let letzterDurchlauf = new Date();
    let letzterDurchlaufNumber = letzterDurchlauf.getTime();
    let pausiert = true;
    function hochzaehlen() {
        pausiert = false;
        if (pausiert === false) {
            let aktuelleZeit = new Date();
            let aktuelleZeitNumber = aktuelleZeit.getTime();
            gestoppteZeit = aktuelleZeitNumber - letzterDurchlaufNumber;
            aktualisiereAnzeige();
        }
        setTimeout(hochzaehlen, 1);
    }
    function aktualisiereAnzeige() {
        meinTimer.innerHTML = millitoMin2(gestoppteZeit);
    }
    function stoppeZeit() {
        pausiert = true;
        sessionStorage.setItem("gestoppte Zeit", gestoppteZeit.toString());
        window.open("profile.html");
        window.close();
    }
    function millitoMin2(_millisekunden) {
        let millisekunden = _millisekunden % 1000;
        let sekunden = Math.floor(_millisekunden / 1000) % 60;
        let minuten = Math.floor(_millisekunden / 60000) % 60;
        minuten = minuten < 10 ? "0" + minuten : minuten;
        sekunden = sekunden < 10 ? "0" + sekunden : sekunden;
        millisekunden = (millisekunden + "000").slice(0, 3);
        return minuten + ":" + sekunden + ":" + millisekunden;
    }
    async function printMemoryImages() {
        let formData = new FormData(document.forms[0]);
        let _url = "https://gis-sose-21.herokuapp.com";
        //let _url: RequestInfo = "http://localhost:8100";
        _url = _url + "/pasteBild";
        //tslint:disable-next-line
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        let response = await fetch(_url);
        let antwort = await response.json();
        console.log(antwort);
        let memoryDiv = document.getElementById("memory-div");
        let urlArray = [];
        let v = 0;
        while (antwort.length / 2 > v) {
            let index = Math.round(Math.random() * (antwort.length));
            if (urlArray.includes(antwort[index]) == false) {
                urlArray.push(antwort[index]);
                v++;
            }
        }
        console.log(urlArray);
        let bilderArray = [];
        for (let i = 0; i < urlArray.length; i++) {
            bilderArray[i] = urlArray[i];
        }
        for (let j = 0; j < urlArray.length; j++) {
            bilderArray[j + urlArray.length] = urlArray[j];
        }
        console.log(bilderArray);
        for (let k = 0; k < bilderArray.length; k++) {
            let memorykartenDiv = document.createElement("div");
            let defaultPictureDiv = document.createElement("div");
            memorykartenDiv.classList.add("einzelnes-div-für-memorykarte");
            let imageMemory = document.createElement("img");
            let defaultPicture = document.createElement("img");
            imageMemory.src = bilderArray[k].url;
            imageMemory.id = bilderArray[k].title + k + "front";
            imageMemory.classList.add("memory-bild-front");
            defaultPicture.src = "https://i.pinimg.com/474x/87/20/0b/87200b400e6d74b8e17a22f93e17f95e.jpg";
            defaultPicture.classList.add("default-picture-back");
            defaultPicture.id = bilderArray[k].title + k;
            defaultPicture.addEventListener("click", speicherUrl);
            defaultPictureDiv.appendChild(defaultPicture);
            memorykartenDiv.appendChild(imageMemory);
            memoryDiv.appendChild(memorykartenDiv);
            memoryDiv.append(defaultPictureDiv);
        }
    }
    printMemoryImages();
    hochzaehlen();
    function speicherUrl(_event) {
        let target = _event.target;
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
    function consequenz(_b) {
        console.log(_b);
        //console.log(<HTMLImageElement>_b[0].previousElementSibling.src);
        let pictureUnder = document.getElementById(_b[0] + "front");
        let pictureUnder2 = document.getElementById(_b[1] + "front");
        let pictureUpper = document.getElementById(_b[0]);
        let pictureUpper2 = document.getElementById(_b[1]);
        console.log(pictureUnder);
        console.log(pictureUnder2);
        if (pictureUnder.src == pictureUnder2.src) {
            paarCounter++;
            console.log(paarCounter);
            pictureUnder.style.opacity = "0";
            pictureUnder2.style.opacity = "0";
            kardArray = [];
        }
        else {
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
})(Prüfungsabgabe || (Prüfungsabgabe = {}));
//# sourceMappingURL=game.js.map