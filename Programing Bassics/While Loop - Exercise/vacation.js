function vacation(input) {

    let neededMoney = Number(input[0]);
    let hadMoney = Number(input[1]);

    let daysSpendingMoney = 0;
    let daysSavingMoney = 0;
    let days = 0;
    let moneyForDay = 0;
    let spendingOrSaving = "";

    let index = 2;

    while (hadMoney < neededMoney) {
        spendingOrSaving = input[index];
        index++;
        moneyForDay = Number(input[index]);
        index++;
        if (spendingOrSaving === "spend") {
            daysSpendingMoney++;
            days++;
            hadMoney -= moneyForDay;
            if (hadMoney < 0) {
                hadMoney = 0;
            }
        }
        else {
            daysSavingMoney++;
            daysSpendingMoney = 0;
            days++;
            hadMoney += moneyForDay;
        }
        if (daysSpendingMoney === 5) {
            console.log(`You can't save the money.`);
            console.log(`${days}`);
            break;
        }
        if (hadMoney >= neededMoney) {
            console.log(`You saved the money for ${days} days.`);
            break;
        }
    }
}
vacation(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]);