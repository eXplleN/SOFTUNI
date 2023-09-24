function godzillaVsKong(input){

    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let clothsPrize = Number(input[2]);

    let decor = budget * 0.10;
    let clothsOverall = statists * clothsPrize;
    
    let clothsDiscount = 0.0;
    let moneyOverAll = 0.0;

    if (statists > 150){
        clothsDiscount = clothsOverall * 0.90;
        moneyOverAll = clothsDiscount + decor;

        if (moneyOverAll > budget){
            console.log(`Not enough money!`);
            console.log(`Wingard needs ${(moneyOverAll - budget).toFixed(2)} leva more.`);
        }
        else if (moneyOverAll <= budget){
            console.log(`Action!`);
            console.log(`Wingard starts filming with ${(budget - moneyOverAll).toFixed(2)} leva left.`);
        }


    }

    else if (statists <= 150){
        moneyOverAll = clothsOverall + decor;

        if (moneyOverAll > budget){
            console.log(`Not enough money!`);
            console.log(`Wingard needs ${(moneyOverAll - budget).toFixed(2)} leva more.`);
        }
        else if (moneyOverAll <= budget){
            console.log(`Action!`);
            console.log(`Wingard starts filming with ${(budget - moneyOverAll).toFixed(2)} leva left.`);
        }
    }




}

godzillaVsKong(["20000","120","55.5"]);