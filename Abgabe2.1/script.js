"use strict";
//Rebecca Chemata OMB
var Abgabe2_1;
(function (Abgabe2_1) {
    //Aufgabe 1:
    /*
    a) In der Konsole wird Folgendes ausgegeben:
    Alles
    Klar?
    Logo!
     
    Es sind alle Variablennamen zulässig, die mit einem Buchstaben beginnen also von A-Z. Sie können aber auch Ziffern enthalten, also von 0-9, die dürfen allerdings
    nicht am Anfang des Variablennamen stehen. Als Sonderzeichen darf das Dollarzeichen verwendet werden ($) oder der Unterstrich (_).
    Es dürfen außerdem keine Bindestriche oder Leerzeichen im Variablennamen enthalten sein. Wichtig ist auch, das die Schlüsselwörter wie "var, function, any..." nicht als Variablennamen
    genutzt werden dürfen.

    b) Als erstes wird die Funktion a1(welche keinen Wert zurückgibt) aufgerufen , die eine neue Variable x vom Typ String angelegt. Der Wert des Strings ("Alles") wird dann anschließend in der Konsole ausgegeben.
    Danach wird die Funktion func1 (welche ebenfalls keinen Wert zurückgibt) aufgerufen, welche "Klar?" in der Kosole ausgibt. Nach dieser Ausgabe springt der Kompiler wieder in die
    a1 Methode/Funktion und gibt zum Schluss "Logo!" aus.
    */
    //c)
    function a1() {
        let x = "Alles";
        func2();
        console.log(x);
        func1();
        console.log("Logo!");
    }
    function func2() {
        console.log("Alles Gute!");
    }
    a1();
    function func1() {
        console.log("Klar?");
    }
    //Aufgabe 2:
    /*
    In der Konsole wird Folgendes ausgegeben:
    9
    8
    7
    6
    5
    4
    3
    2
    1
    
    Anmerkung :Sobald i nicht mehr größer als 0 ist wird nichts mehr ausgegeben.*/
    function a2() {
        let i = 9;
        do {
            console.log(i);
            i = i - 1;
        } while (i > 0);
    }
    a2();
    //Aufgabe 3:
    /* function a1(): void {
        let x: string = "Alles";
        func2("Hallo");
        console.log(x);
        func1();
        console.log("Logo!");
        let x:
    }

    function func2(): void {
        console.log("Alles Gute!");
    }
    
    
    a1();
    
    function func1(): void {
        console.log("Klar?");
    }
    
    Hier sollte man ja Fehler einbauen. Komilitonin hat die Fehler sehr schnell gefunden, war wohl zu leicht xD*/
    //Aufgabe 4:
    let x = "Hallo";
    console.log(x);
    funk1(x);
    console.log(x);
    funk2();
    func3();
    console.log(x);
    function funk1(y) {
        y = "Bla";
        console.log(y);
    }
    function funk2() {
        let x = "Blubb";
        console.log(x);
    }
    function func3() {
        x = "Test";
    }
    /* a) In der Konsole wird Folgendes ausgegeben:
   Hallo
   Bla
   Hallo
   Blubb
   Test
    
   Als erstes wird eine neue Variable x vom Typ String angelegt und mit dem Wert "Hallo" initialisiert. Anschließend wird die Funktion funk1 (hier musste
   ich den Namen ändern, weil es den Funktionsnamen func1 schon in Aufgabe 1 gibt ) aufgerufen, die die globale Variable x zu y ändert und ihr den Wert
   "Bla" zuordnet. y wird dann in der Konsole ausgegeben. Danach wird wieder die Variable x ausgegeben, die immernoch den Wert "Hallo" hat, da y nur ein
   Übergabeparameter ist und somit den Wert von x nur in der Funktion geändert hat. Danach wird die Funktion func2 aufgerufen, in der der Variable x der
   Wert "Blubb" zugeordnet wird, welcher in der nächsten Zeile auch ausgegeben wird. In diesem Fall steht die Ausgabe (console.log()) in der Funktion drin
   weshalb der neue Wert von x ausgegeben werden kann ("Blubb"). Zum Schluss wird die Funktion func3 aufgerufen, die den Wert von x zu "Test" ändert, welcher
   dann ebenfalls ausgegeben wird.
   
   b) Globale Variable: Ist eine Variable, die im ganzen Programm zur Verfügung steht. In dem Beispiel oben ist x die globale Variable, die jedoch von
   lokalen Variablen überschrieben werden kann.
   
   Lokale Variable: Ist eine Variable, die nur zwischen zwei geschweiften Klammern leben kann, zum Beispiel innerhalb einer Funktion/Methode.
   
   Übergabeparameter: Ist in dem Beispiel oben das y, welches in der Klammer nach dem Funktionsnamen steht. Es enthält Daten, die man über die runden Klammern beim
   Methodenaufruf selbst übergeben kann.


   Funktionen können einen Wert zurückgeben oder keinen Wert zurückgeben (void return). Eine Funktion muss also genau wie eine Variable zuerst definiert werden.   */
    //Aufgabe 5
    //a)
    function multiply(a, b) {
        return a * b;
    }
    console.log(multiply(3, 4));
    //b)
    function max(a, b) {
        if (a > b) {
            return a;
        }
        return b;
    }
    console.log(max(7, 387));
    //c)
    function sum() {
        let i = 1;
        let summe = 0;
        while (i <= 100) {
            summe = summe + i;
            i++;
        }
        console.log(summe);
    }
    sum();
    //d)
    function random() {
        for (let i = 0; i < 10; i++) {
            console.log(Math.random() * (100 + 1));
        }
    }
    random();
    //e)
    function factorial(n) {
        let fac = 1;
        if (n > 1) {
            while (n > 1) {
                fac = n * fac;
                n--;
            }
            return fac;
        }
        return 1;
    }
    console.log(factorial(5));
    //f)
    function leapyears() {
        for (let i = 1900; i < 2021; i++) {
            if (i % 4 == 0 && i % 100 != 0) {
                console.log(i);
            }
        }
    }
    leapyears();
    //Aufgabe 6
    //a)
    function hashtag() {
        let hash = "";
        for (let i = 0; i < 7; ++i) {
            hash += "#";
            console.log(hash);
        }
        console.log();
    }
    hashtag();
    //b)
    function fizzBuzz() {
        for (let i = 1; i <= 100; i++) {
            if (i % 5 == 0 && i % 3 == 0) {
                console.log("FizzBuzz");
            }
            else if (i % 5 == 0) {
                console.log("Buzz");
            }
            else if (i % 3 == 0) {
                console.log("Fizz");
            }
            else
                console.log(i);
        }
    }
    fizzBuzz();
    //Anmerkung für c): Theoretisch könnte man diese Teilaufgabe auch mit einem Switch-Case lösen und console.log(i) als,
    // default case machen , dann müsste man nicht immer else if schreiben. 
    //d)
    /*function schach(): string {
        let schachbrett: string = "";
        let reihen: number = 8;
        let breite: number = 8;


        for (let i: number = 1; i <= reihen; i++) {

            for (let j: number = 1; j <= breite; j++) {
                if (schachbrett.length % 2 != 0) {
                    schachbrett += "#";

                } else {
                    schachbrett += " ";
                }


            }
            schachbrett += "\n";
        }

        return schachbrett;

    }
    console.log(schach());

    Anmerkung: Hat ein bisschen gebraucht, bis ich die Aufgabe gelöst habe. Aber als ich das Prinzip mit
    den Schleifen ineinander verschachtelt verstanden habe, fiel mir die Aufgabe leichter. Also danke für die Tipps :)
    */
    //e)
    //die modifizierte Version:
    function schach(spalten, reihen) {
        let schachbrett = "";
        for (let i = 1; i <= reihen; i++) {
            for (let j = 1; j <= spalten; j++) {
                if (schachbrett.length % 2 != 0) {
                    schachbrett += "#";
                }
                else {
                    schachbrett += " ";
                }
            }
            schachbrett += "\n";
        }
        return schachbrett;
    }
    console.log(schach(20, 6));
})(Abgabe2_1 || (Abgabe2_1 = {}));
//# sourceMappingURL=script.js.map