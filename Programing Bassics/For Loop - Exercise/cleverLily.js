function cleverLily(input){

    let age = Number(input[0]);
    let wmPrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let birthdays = 0;
    let moneyFromBirthdays = 0;
    let touys = 0;
    let money = 0;
    let money1 = 0;
    let totalMoney = 0;
    let brother = 0;

      for (let i = 1; i <= age; i++){
        if (i % 2 === 0){
            birthdays += 1;
            for (let i = 1; i <= birthdays; i++){
            moneyFromBirthdays += 10;
               brother = birthdays;
               money = moneyFromBirthdays - brother;
            }
        }
        else {
          touys += 1;
          money1 = touys * toyPrice;
        }
        totalMoney = money + money1;
      }
       if (totalMoney >= wmPrice){
        console.log(`Yes! ${(totalMoney - wmPrice).toFixed(2)}`);
       }
       else {
        console.log(`No! ${(wmPrice - totalMoney).toFixed(2)}`);
       }
}

cleverLily(["10","170.00","6"]);