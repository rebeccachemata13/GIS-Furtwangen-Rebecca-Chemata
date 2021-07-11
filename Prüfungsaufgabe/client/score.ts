
namespace Prüfungsabgabe {
    interface Gamer {
        name: string;
        time: string;
    }

    async function printScoreTable(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        let _url: RequestInfo = "https://gis-sose-21.herokuapp.com";
        //let _url: RequestInfo = "http://localhost:8100";
        _url = _url + "/pasteGamer";
        console.log(_url);
        //tslint:disable-next-line
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "?" + query.toString();
        let response: Response = await fetch(_url);
        let antwort: Gamer[] = await response.json();
        console.log(antwort);

        let timeArray: number[] = [];
        for (let j: number = 0; j < antwort.length; j++) {
            timeArray.push(parseInt(antwort[j].time));
        }
        timeArray.sort(function (_a: number, _b: number): number { return _a - _b; });
        console.log(timeArray);

        let tabelle: HTMLTableElement = <HTMLTableElement>document.getElementById("highscore-table");

        for (let i: number = 0; i < timeArray.length; i++) {
            let reihe: HTMLTableRowElement = document.createElement("tr");
            let nameElement: HTMLTableDataCellElement = document.createElement("td");
            nameElement.innerHTML = antwort[i].name;
            let timeElement: HTMLTableDataCellElement = document.createElement("td");

            timeElement.innerHTML = millitoMin(timeArray[i]);
            reihe.appendChild(nameElement);
            reihe.appendChild(timeElement);
            tabelle.appendChild(reihe);
        }


    }
    function millitoMin(_millisekunden: number): string {
        
        let millisekunden: string | number = _millisekunden % 1000;
        let sekunden: string | number = Math.floor(_millisekunden / 1000) % 60;
        let minuten: string | number = Math.floor(_millisekunden / 60000) % 60;

        minuten = minuten < 10 ? "0" + minuten : minuten;
        sekunden = sekunden < 10 ? "0" + sekunden : sekunden;
        millisekunden = (millisekunden + "000").slice(0, 3);

        return  minuten + ":" + sekunden + ":" + millisekunden;
    }
    printScoreTable();
}
