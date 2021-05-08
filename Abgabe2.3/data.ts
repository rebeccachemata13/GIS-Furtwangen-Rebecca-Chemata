namespace Abgabe2_3 {
    export let brotOberseiten: OberseiteBrot[] = [

        {
            imageId: "brötchen1",
            imageUrl: "brötchen_ohne_sesam.jpg",
            mitSesam: false,
            knusprig: false,
            preis: 0.10
        },
        {
            imageId: "brötchen2",
            imageUrl: "knusper_sesam.jpg",
            mitSesam: true,
            knusprig: true,
            preis: 0.50
        },
        {
            imageId: "brötchen3",
            imageUrl: "Sesambrötchen.jpg",
            mitSesam: true,
            knusprig: false,
            preis: 0.25

        }];

    export let unterBrotseiten: UnterseiteBrot[] = [
        {
            imageId: "?",
            imageUrl: "?",
            mitSesam: true,
            knusprig: false,
            preis: 0.50
        },
        {
            imageId: "?",
            imageUrl: "?",
            mitSesam: false,
            knusprig: true,
            preis: 0.25
        },
        {
            imageId: "?",
            imageUrl: "?",
            mitSesam: false,
            knusprig: false,
            preis: 0.10

        }];

    export let salate: Salat[] = [
        {
            imageId: "?",
            imageUrl: "?",
            mitTomaten: true,
            preis: 0.50,
            mitZwiebeln: true

        },
        {
            imageId: "?",
            imageUrl: "?",
            mitTomaten: false,
            preis: 0.10,
            mitZwiebeln: false

        },
        {
            imageId: "?",
            imageUrl: "?",
            mitTomaten: false,
            preis: 0.40,
            mitZwiebeln: true

        }];

    export let fleischMöglichkeiten: Fleisch[] = [
        {
            imageId: "?",
            imageUrl: "?",
            vegetarisch: true,
            Fleischart: "Vegi",
            preis: 2.10
        },
        {
            imageId: "?",
            imageUrl: "?",
            vegetarisch: false,
            Fleischart: "Rind",
            preis: 2.10
        },
        {
            imageId: "?",
            imageUrl: "?",
            vegetarisch: false,
            Fleischart: "Schwein",
            preis: 2.10
        }];





}