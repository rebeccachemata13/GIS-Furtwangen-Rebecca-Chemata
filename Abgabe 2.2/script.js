"use strict";
var Abgabe2_2;
(function (Abgabe2_2) {
    //Aufgabe 1 
    //a)
    function min(...outputs) {
        let minimum = outputs[0];
        for (let i = 0; i < outputs.length; i++) {
            if (outputs[i] < minimum) {
                minimum = outputs[i];
            }
        }
        return minimum;
    }
    console.log(min(1, -34, 56, -54, 78, -456, 54, 67));
    //b)
    function isEven(zahl) {
        if (zahl == 0) {
            return true;
        }
        else if (zahl == 1) {
            return false;
        }
        else if (zahl < 0) {
            return isEven(-zahl);
        }
        return isEven(zahl - 2);
    }
    console.log(isEven(50));
    console.log(isEven(75));
    console.log(isEven(-1));
    let student1 = {
        vorname: "Rebecca",
        nachname: "Chemata",
        alter: 18,
        matrikelnummer: 266637,
        studiengang: "OMB"
    };
    let student2 = {
        vorname: "Tom",
        nachname: "Meyer",
        alter: 21,
        matrikelnummer: 266645,
        studiengang: "MKB"
    };
    let student3 = {
        vorname: "Elina",
        nachname: "Chemata",
        alter: 19,
        matrikelnummer: 266455,
        studiengang: "MIB"
    };
    function createStudent(_vorname, _nachname, _alter, _matrikelnummer, _studiengang) {
        let s = { vorname: _vorname, nachname: _nachname, alter: _alter, matrikelnummer: _matrikelnummer, studiengang: _studiengang };
        return s;
    }
    let studentenArray = [];
    studentenArray.push(student1);
    studentenArray.push(student2);
    studentenArray.push(student3);
    studentenArray.push(createStudent("Isabelle", "Brenn", 19, 27745, "MIB"));
    console.log(student1.matrikelnummer);
    console.log(student2.vorname);
    console.log(student3.nachname);
    console.log(student1.alter);
    console.log(studentenArray);
    function showInfo(_studentenArray, s) {
        for (let i = 0; i < _studentenArray.length; i++) {
            if (_studentenArray[i] == s) {
                console.log(s.vorname);
                console.log(s.nachname);
                console.log(s.alter);
                console.log(s.matrikelnummer);
                console.log(s.studiengang);
                return;
            }
        }
        console.log("Sorry, die Person gibt es nicht.");
    }
    showInfo(studentenArray, student1);
    showInfo(studentenArray, student2);
    showInfo(studentenArray, student3);
    showInfo(studentenArray, studentenArray[3]);
    class Person {
        constructor(_vorname, _nachname, _alter, _matrikelnummer, _studiengang) {
            this.vorname = _vorname;
            this.nachname = _nachname;
            this.alter = _alter;
            this.matrikelnummer = _matrikelnummer;
            this.studiengang = _studiengang;
        }
        showInfos() {
            console.log(this.vorname, this.nachname, this.alter, this.matrikelnummer, this.studiengang);
        }
    }
    let s1 = new Person("Rebecca", "Chemata", 18, 266637, "OMB");
    s1.showInfos();
    //Aufgabe 2
    //a)
    function backwards(versuchArray) {
        let reverseArray = [versuchArray.length];
        for (let i = 0; i < versuchArray.length; i++) {
            reverseArray[i] = versuchArray[(versuchArray.length - 1) - i];
        }
        return reverseArray;
    }
    let arr = [5, 42, 17, 2018, -10, 60, -10010];
    let arrBack = backwards(arr);
    console.log(arr);
    console.log(arrBack);
    //b)
    function join(firstArray, secondArray) {
        let joinedArray = [firstArray.length + secondArray.length];
        for (let i = 0; i < firstArray.length; i++) {
            joinedArray[i] = firstArray[i];
        }
        for (let i = 0; i < secondArray.length; i++) {
            joinedArray[i + firstArray.length] = secondArray[i];
        }
        return joinedArray;
    }
    console.log(join(arr, [15, 9001, -440]));
    //c)
    function split(array, firstNumber, secondNumber) {
        let newArray = [];
        let defaultArray = [];
        if (firstNumber < 0 || secondNumber < 0) {
            console.log("Hey es gibt keine negative Stelle in einem Array!");
            return defaultArray;
        }
        if (firstNumber > array.length || secondNumber > array.length) {
            console.log("Hey so groß ist dein Array nicht!");
            return defaultArray;
        }
        if (secondNumber <= firstNumber) {
            console.log("Hey der erste Index muss kleiner als der zweite sein!");
            return defaultArray;
        }
        for (let i = firstNumber; i <= secondNumber; i++) {
            newArray.push(array[i]);
        }
        return newArray;
    }
    arr = split(arr, 0, 4);
    console.log(arr);
    console.log(split(arr, 1, 2));
    console.log(split(arr, 2, 0)); // Bonus c)
    console.log(split(arr, -1, 2)); // Bonus c)
    console.log(split(arr, 0, 7)); // Bonus c)
    //Aufgabe 3
    let canvas = document.getElementById("myFirstCanvas");
    let context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(0, 320);
    context.lineTo(500, 320);
    context.lineTo(500, 400);
    context.lineTo(0, 400);
    context.lineTo(0, 320);
    context.closePath();
    context.lineWidth = 5;
    context.fillStyle = "green";
    context.fill();
    context.strokeStyle = "lightgreen";
    context.stroke();
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, 320);
    context.lineTo(500, 320);
    context.lineTo(500, 0);
    context.lineTo(0, 0);
    context.closePath();
    context.lineWidth = 5;
    context.fillStyle = "lightblue";
    context.fill();
    context.strokeStyle = "lightblue";
    context.stroke();
    context.beginPath();
    context.moveTo(0, 300);
    context.lineTo(100, 200);
    context.lineTo(150, 250);
    context.lineTo(300, 100);
    context.lineTo(400, 250);
    context.lineTo(600, 50);
    context.lineTo(500, 320);
    context.lineTo(0, 320);
    context.closePath();
    context.fillStyle = "grey";
    context.fill();
    context.strokeStyle = "grey";
    context.stroke();
    context.beginPath();
    context.moveTo(170, 80);
    context.bezierCurveTo(130, 100, 130, 150, 230, 150);
    context.bezierCurveTo(250, 180, 320, 180, 340, 150);
    context.bezierCurveTo(420, 150, 420, 120, 390, 100);
    context.bezierCurveTo(430, 40, 370, 30, 340, 50);
    context.bezierCurveTo(320, 5, 250, 20, 250, 50);
    context.bezierCurveTo(200, 5, 150, 20, 170, 80);
    context.closePath();
    context.lineWidth = 5;
    context.fillStyle = "white";
    context.fill();
    context.strokeStyle = "white";
    context.stroke();
    context.beginPath();
    context.moveTo(300, 320);
    context.lineTo(300, 270);
    context.lineTo(250, 270);
    context.lineTo(250, 320);
    context.lineTo(300, 320);
    context.closePath();
    context.lineWidth = 2;
    context.strokeStyle = "orange";
    context.fillStyle = "orange";
    context.fill();
    context.stroke();
    context.beginPath();
    context.moveTo(240, 280);
    context.lineTo(275, 240);
    context.lineTo(310, 280);
    context.lineTo(240, 280);
    context.closePath();
    context.strokeStyle = "brown";
    context.fillStyle = "brown";
    context.fill();
    context.stroke();
    context.beginPath();
    context.moveTo(100, 280);
    context.lineTo(100, 320);
    context.strokeStyle = "black";
    context.stroke();
    context.beginPath();
    context.moveTo(100, 260);
    context.lineTo(90, 310);
    context.lineTo(110, 310);
    context.lineTo(100, 260);
    context.closePath();
    context.fillStyle = "lightgreen";
    context.fill();
    context.stroke();
    let width = 50;
    let height = 40;
    let radius = 30;
    let startAngle = 0 * Math.PI;
    let endAngle = 2 * Math.PI;
    let gegenUhrzeigersinn = true;
    context.beginPath();
    context.arc(width, height, radius, startAngle, endAngle, gegenUhrzeigersinn);
    context.closePath();
    context.fillStyle = "yellow";
    context.fill();
    context.strokeStyle = "yellow";
    context.stroke();
    let canvas2 = document.getElementById("mySecondCanvas");
    let context2 = canvas2.getContext("2d");
    //c)
    class Rechteck {
        constructor() {
            this.linie1 = Math.floor(Math.random() * 200);
            this.linie2 = Math.floor(Math.random() * 200);
            this.linie3 = Math.floor(Math.random() * 200);
            this.linie4 = Math.floor(Math.random() * 200);
            this.linienfarbe = "purple";
            this.fuellfarbe = "purple";
        }
        //d)
        drawRect() {
            context2.beginPath();
            context2.rect(this.linie1, this.linie2, this.linie3, this.linie4);
            context2.fillStyle = this.fuellfarbe;
            context2.fill();
            context2.strokeStyle = this.linienfarbe;
            context2.stroke();
        }
    }
    let r1 = new Rechteck;
    let r2 = new Rechteck;
    let r3 = new Rechteck;
    //e)
    let rechteckArray = [];
    rechteckArray.push(r1);
    rechteckArray.push(r2);
    rechteckArray.push(r3);
    for (let i = 0; i < rechteckArray.length; i++) {
        rechteckArray[i].drawRect();
    }
    setTimeout(() => location.reload(), 1000);
})(Abgabe2_2 || (Abgabe2_2 = {}));
//# sourceMappingURL=script.js.map