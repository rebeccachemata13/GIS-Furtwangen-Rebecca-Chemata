"use strict";
var Prüfungsabgabe;
(function (Prüfungsabgabe) {
    async function printScoreTable() {
        let formData = new FormData(document.forms[0]);
        let _url = "https://gis-sose-21.herokuapp.com";
        //let _url: RequestInfo = "http://localhost:8100";
        _url = _url + "/pasteGamer";
        console.log(_url);
        //tslint:disable-next-line
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        let response = await fetch(_url);
        let antwort = await response.json();
        console.log(antwort);
        let timeArray = [];
        let timeArrayString = [];
        for (let j = 0; j < antwort.length; j++) {
            timeArray.push(parseInt(antwort[j].time));
        }
        timeArray.sort(function (_a, _b) { return _a - _b; });
        console.log(timeArray);
        for (let k = 0; k < timeArray.length; k++) {
            timeArrayString[k] = timeArray[k].toString();
        }
        let tabelle = document.getElementById("highscore-table");
        for (let i = 0; i < timeArrayString.length; i++) {
            let reihe = document.createElement("tr");
            let nameElement = document.createElement("td");
            nameElement.innerHTML = antwort[i].name;
            let timeElement = document.createElement("td");
            timeElement.innerHTML = timeArrayString[i];
            reihe.appendChild(nameElement);
            reihe.appendChild(timeElement);
            tabelle.appendChild(reihe);
        }
    }
    printScoreTable();
})(Prüfungsabgabe || (Prüfungsabgabe = {}));
//# sourceMappingURL=score.js.map