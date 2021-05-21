"use strict";
async function communicate(_url) {
    let response = await fetch(_url);
    console.log("Response", response);
    let s = await response.json();
    console.log(s);
}
console.log("Start");
communicate("https://hs-furtwangen.github.io/GIS-SoSe-2021/content/2-chapter/L2.5/testjson.json");
console.log("End");
//# sourceMappingURL=test.js.map