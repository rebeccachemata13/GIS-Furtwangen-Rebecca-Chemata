namespace Abgabe2_4 {
    /*export let brotOberseiten: BurgerTeil[] = [

        {
            imageId: "brötchen1",
            imageUrl: "brötchen_ohne_sesam.jpg",
            option1: false,
            option2: false,
            preis: 0.10
        },
        {
            imageId: "brötchen2",
            imageUrl: "knusper_sesam.jpg",
            option1: true,
            option2: true,
            preis: 0.50
        },
        {
            imageId: "brötchen3",
            imageUrl: "Sesambrötchen.jpg",
            option1: true,
            option2: false,
            preis: 0.25

        }];

    export let unterBrotseiten: BurgerTeil[] = [
        {
            imageId: "?",
            imageUrl: "?",
            option1: true,
            option2: false,
            preis: 0.50
        },
        {
            imageId: "?",
            imageUrl: "?",
            option1: false,
            option2: true,

            preis: 0.25
        },
        {
            imageId: "?",
            imageUrl: "?",
            option1: false,
            option2: false,
            preis: 0.10

        }];

    export let salate: BurgerTeil[] = [
        {
            imageId: "?",
            imageUrl: "?",
            option1: true,
            option2: true,
            preis: 0.50

        },
        {
            imageId: "?",
            imageUrl: "?",
            option1: false,
            option2:  false,
            preis: 0.10

        },
        {
            imageId: "?",
            imageUrl: "?",
            option1: false,
            option2:  true,
            preis: 0.40

        }];
        

    export let fleischMöglichkeiten: BurgerTeil[] = [
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

        */


    export let burgerJSON: string =
        `
    {
       "brotOberseiten":  [{
        "imageId": "brötchen1",
        "imageUrl": "brötchen_ohne_sesam.jpg",
        "option1": "false",
        "option1": "false",
        "preis": 0.10 
    },
    {
        "imageId": "brötchen2",
        "imageUrl": "knusper_sesam.jpg",
        "option1": "true",
        "option1": "true",
        "preis": 0.50
    },
    {
        "imageId": "brötchen3",
        "imageUrl": "Sesambrötchen.jpg",
        "option1": "true",
        "option1": "false",
        "preis": 0.25
    }
],
"unterBrotseiten": [
    {
        "imageId": "brötchen-u-1",
        "imageUrl": "brötchen_ohne_sesam.jpg",
        "option1": "true",
        "option1": "false",
        "preis": 0.50
    },
    {
        "imageId": "brötchen-u-2",
        "imageUrl": "knusper_sesam.jpg",
        "option1": "false",
        "option1": "true",
        "preis": 0.25
    },
    {
        "imageId": "brötchen-u-3",
        "imageUrl": "Sesambrötchen.jpg",
         "option1": "false",
         "option1": "false",
         "preis": 0.10

    }
],
"salate":  [
    {
        "imageId": "salat1",
        "imageUrl": "tomaten_und_zwiebeln.jpg",
        "option1":"true",
        "option1": "true",
        "preis": 0.50
    },
    {
        "imageId": "salat2",
        "imageUrl": "salatkopf.jpg",
        "option1":"false",
        "option1": "false",
        "preis": 0.10
    },
    {
        "imageId": "salat3",
        "imageUrl": "zwiebeln.jpg",
        "option1":"false",
        "option1": "true",
        "preis": 0.40
     
    }
],
"fleischMöglichkeiten":  [
    {
        "imageId": "fleisch1",
        "imageUrl": "veggie.jpg",
        "option1": "true",
        "option1": "Vegi",
        "preis": 2.10
    },
    {
        "imageId": "fleisch2",
        "imageUrl": "rindfleisch.jpg",
        "option1": "false",
        "option1": "Rind",
        "preis": 2.10
    },
    {
        "imageId": "fleisch3",
        "imageUrl": "schweinefleisch.jpg",
        "option1": "false",
        "option1": "Schwein",
        "preis": 2.10
    }
  ]
}
`;
}