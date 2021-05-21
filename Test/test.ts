async function communicate(_url: RequestInfo): Promise<void> {
    
    let response: Response = await fetch(_url);
    console.log("Response", response);
    let s: KonsolenAusgabe = await response.json();
    console.log(s);
}
console.log("Start");
communicate("https://hs-furtwangen.github.io/GIS-SoSe-2021/content/2-chapter/L2.5/testjson.json");
console.log("End");

interface KonsolenAusgabe {
    gruss: string;
    text: string;
    zweiterText: string;

}