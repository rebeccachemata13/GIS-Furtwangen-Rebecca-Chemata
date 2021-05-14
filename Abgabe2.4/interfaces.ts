namespace Abgabe2_4 {

    export interface BurgerTeil {
        imageId: string;
        imageUrl: string;
        preis: number;
    }

   

    export  interface HamburgerOptionen {
            brotOberseiten: BurgerTeil[];
            salate: BurgerTeil[];
            fleischMöglichkeiten: BurgerTeil[];
            unterBrotseiten: BurgerTeil[];

   
    
    
    }
}
