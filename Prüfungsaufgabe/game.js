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
        let millisekunden = gestoppteZeit % 1000;
        let sekunden = Math.floor(gestoppteZeit / 1000) % 60;
        let minuten = Math.floor(gestoppteZeit / 60000) % 60;
        minuten = minuten < 10 ? "0" + minuten : minuten;
        sekunden = sekunden < 10 ? "0" + sekunden : sekunden;
        millisekunden = (millisekunden + "000").slice(0, 3);
        meinTimer.innerHTML = minuten + ":" + sekunden + ":" + millisekunden;
    }
    function stoppeZeit() {
        pausiert = true;
        sessionStorage.setItem("gestoppte Zeit", gestoppteZeit.toString());
        window.open("profile.html");
        window.close();
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
            memorykartenDiv.addEventListener("click", speicherUrl);
            memorykartenDiv.classList.add("einzelnes-div-für-memorykarte");
            let imageMemory = document.createElement("img");
            let defaultPicture = document.createElement("img");
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
    function speicherUrl(_event) {
        //flipcard()
        counter++;
        console.log(counter);
        let target = _event.target;
        kardArray.push(target);
        console.log(kardArray);
        if (counter == 2) {
            counter = 0;
            consequenz(kardArray);
        }
    }
    function consequenz(_b) {
        console.log(_b);
        if (_b[0].id == _b[1].id) {
            paarCounter++;
            console.log(paarCounter);
            for (let i = 0; i < _b.length; i++) {
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
})(Prüfungsabgabe || (Prüfungsabgabe = {}));
//# sourceMappingURL=game.js.map