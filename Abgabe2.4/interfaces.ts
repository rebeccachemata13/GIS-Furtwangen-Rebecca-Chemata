namespace Abgabe2_4 {


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
    }

    export  interface HamburgerOptionen {
            brotOberseiten: OberseiteBrot[];
            salate: Salat[];
            fleischMöglichkeiten: Fleisch[];
            unterBrotseiten: UnterseiteBrot[];

   
    
    
    }
}
