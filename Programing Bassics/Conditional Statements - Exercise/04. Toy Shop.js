function toyShop(input) {

    let excursion = Number(input[0]);
    let puzzels = Number(input[1]);
    let talkingDoll = Number(input[2]);
    let teddyBear = Number(input[3]);
    let minion = Number(input[4]);
    let truck = Number(input[5]);
    
    let income = (puzzels * 2.60) + (talkingDoll * 3) + (teddyBear * 4.10) + (minion * 8.20) + (truck * 2);
    let totalToys = puzzels + talkingDoll + teddyBear + minion + truck;
    let totalIncome = 0.0;
    let rent = 0.0;
    let profit = 0.0;
   
    if (totalToys >= 50){
        totalIncome = income * 0.75;
        rent = totalIncome * 0.10;
        profit = totalIncome - rent;
    }
    else {
       totalIncome = income;
       rent = totalIncome * 0.10;
       profit = totalIncome - rent;
    }
    if (profit >= excursion){
       console.log(`Yes! ${(profit - excursion).toFixed(2)} lv left.`);
    }
   else {
       console.log(`Not enough money! ${(excursion - profit).toFixed(2)} lv needed.`);
   }
   
   }
   
   

toyShop(["320", "8", "2", "5", "5", "1"]);