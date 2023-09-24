function journey (input) {

    let budget = Number(input[0]);
    let season = input[1];

    let moneySpend = 0.0; 
    let place = "" ;
    let destination = "" ;

    if (budget <= 100){
  
        destination  = "Bulgaria";

            if (season == "summer"){

                place = "Camp";
                moneySpend = budget * 0.30;
            }
            
            else {

                place = " Hotel";
                moneySpend = budget * 0.70;
            }
        }

    else if (budget <= 1000){

        destination = "Balkans";

              if (season == "summer"){

            place = "Camp";
            moneySpend = budget * 0.40;
        }
          
           else {

            place = "Hotel";
            moneySpend = budget * 0.80;
           }

    }

    else {

        destination = "Europe";

        if (season == "summer"){

            place = "Hotel";
            moneySpend = budget * 0.90;

        }

        else {
            
            place = "Hotel";
            moneySpend = budget * 0.90;
        }
    }

        console.log(`Somewhere in ${destination}`);
        console.log(`${place} - ${(moneySpend).toFixed(2)}`);



    }







journey(["50", "summer"])