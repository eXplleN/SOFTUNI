function catDiet(input) {

    let procentMaznini = Number(input[0]);
    let procentProteini = Number(input[1]);
    let procentVaglehidrati = Number(input[2]);
    let allKalorii = Number(input[3]);
    let procentVoda = Number(input[4]);

    let allGramMaznini = (allKalorii * (procentMaznini / 100)) / 9;
    let allGramProtein = (allKalorii * (procentProteini / 100)) / 4;
    let allGramVaglehidrati = (allKalorii * (procentVaglehidrati / 100)) / 4;

    let allFood = allGramMaznini + allGramProtein + allGramVaglehidrati;
    let kalorii = allKalorii / allFood;
    let whater = (100 - procentVoda) / 100;
    let result = kalorii * whater;

    console.log(result.toFixed(4));
}

catDiet(["20",
    "60",
    "20",
    "1800",
    "50"]);