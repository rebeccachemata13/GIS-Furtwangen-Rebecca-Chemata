"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongo = require("mongodb");
async function connectToDatabase(_url) {
    let options = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();
    let benutzer = mongoClient.db("Test").collection("Students");
    let s = { name: "Chemata", firstname: "Rebecca", matrikelnummer: 266637, alter: 34 };
    let s1 = { name: "Rebecca", firstname: "Chemata", matrikelnummer: 4, alter: 18 };
    benutzer.insertOne(s);
    benutzer.insertOne(s1);
    benutzer.deleteMany({ matrikelnummer: 266637 });
    let cursor = benutzer.find();
    console.log(cursor);
    console.log(benutzer);
    let ergebnis = await cursor.toArray();
    console.log("Database connection", benutzer != undefined);
    console.log(ergebnis);
}
connectToDatabase("mongodb://localhost:27017");
//# sourceMappingURL=mongo.js.map