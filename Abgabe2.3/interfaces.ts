namespace Abgabe2_3 {


    export interface OberseiteBrot {
        imageId: string;
        imageUrl: string;
        mitSesam: boolean;
        knusprig: boolean;
        preis: number;


    }
    export interface UnterseiteBrot {
        imageId: string;
        imageUrl: string;
        mitSesam: boolean;
        knusprig: boolean;
        preis: number;

    }
    export interface Salat {
        imageId: string;
        imageUrl: string;
        mitTomaten: boolean;
        preis: number;
        mitZwiebeln: boolean;



    }
    export interface Fleisch {
        imageId: string;
        imageUrl: string;
        vegetarisch: boolean;
        Fleischart: string;
        preis: number;

        /*interface HamburgerOptionen {
            brotOberseite: OberseiteBrot;
            salat: Salat;
            fleisch: Fleisch;
            unterBrotseite: UnterseiteBrot;

    Anmerkung: Das ist die 2b), die wurde auskommentiert, weil sie 
               diese Woche noch nicht benutzt wird.
    
    */
    }
}
