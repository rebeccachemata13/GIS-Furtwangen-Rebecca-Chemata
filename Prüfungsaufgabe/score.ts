
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
        let timeArrayString: string[] = [];

        for (let j: number = 0; j < antwort.length; j++) {
            timeArray.push(parseInt(antwort[j].time));
        }
        timeArray.sort(function (_a: number,  _b: number): number { return _a - _b; });
        console.log(timeArray);
        
        for (let k: number = 0; k < timeArray.length; k++) {
        timeArrayString[k] = timeArray[k].toString();
        }
        let tabelle: HTMLTableElement = <HTMLTableElement>document.getElementById("highscore-table");

        for (let i: number = 0; i < timeArrayString.length; i++) {
            let reihe: HTMLTableRowElement = document.createElement("tr");
            let nameElement: HTMLTableDataCellElement = document.createElement("td");
            nameElement.innerHTML = antwort[i].name;
            let timeElement: HTMLTableDataCellElement = document.createElement("td");
            timeElement.innerHTML = timeArrayString[i];
            reihe.appendChild(nameElement);
            reihe.appendChild(timeElement);
            tabelle.appendChild(reihe);
        }


    }
    printScoreTable();
}
