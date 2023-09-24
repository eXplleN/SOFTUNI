function fishingBoat(input){

    let budget = Number(input[0]);
    let season = input[1];
    let fisherMans = Number(input[2]);

    let seasonPrice = 0.0;

    if (season == "Spring"){
        seasonPrice = 3000;
            if (fisherMans <= 6){
                seasonPrice = seasonPrice * 0.90;
            }
            else if (fisherMans >= 7 && fisherMans <= 11){
            
                    seasonPrice = seasonPrice * 0.85;
            }
            else if (fisherMans >= 12){
            
                    seasonPrice = seasonPrice * 0.75;
            }
      }
     
    else if (season == "Summer" || season == "Autumn"){
        seasonPrice = 4200;
        if (fisherMans <= 6){
            seasonPrice = seasonPrice * 0.90;
        }
        else if (fisherMans >= 7 && fisherMans <= 11){
        
                seasonPrice = seasonPrice * 0.85;
        }
        else if (fisherMans >= 12){
        
                seasonPrice = seasonPrice * 0.75;
        }
    }


    else {
        seasonPrice = 2600;
        if (fisherMans <= 6){
            seasonPrice = seasonPrice * 0.90;
        }
        else if (fisherMans >= 7 && fisherMans <= 11){
        
                seasonPrice = seasonPrice * 0.85;
        }
        else if (fisherMans >= 12){
        
                seasonPrice = seasonPrice * 0.75;
        }
    }
    if(fisherMans%2==0 && season!="Autumn"){
        seasonPrice=seasonPrice * 0.95;
    }
    
    if (budget >= seasonPrice){
        console.log(`Yes! You have ${(budget - seasonPrice).toFixed(2)} leva left.`);
    }
    else {
        console.log(`Not enough money! You need ${(seasonPrice - budget).toFixed(2)} leva.`);
    }



}

fishingBoat(["3600",

"Autumn",

"6"])