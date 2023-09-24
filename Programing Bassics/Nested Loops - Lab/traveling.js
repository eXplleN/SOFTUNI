function traveling(input) {

    let index = 0;
    let destination = input[index];
    index++;
    let neededMoney = Number(input[index]);
    index++;
    let savedMoney = Number(input[index]);
    let money = 0;


    while (destination !== "End") {
        while (money < neededMoney) {
            savedMoney = Number(input[index]);
            money += savedMoney;
            index++;
        }
        if (money >= neededMoney) {
            console.log(`Going to ${destination}!`);
            destination = input[index];
            index++;
        }
        neededMoney = Number(input[index]);
        money = 0;
        index++;
    }
}
traveling(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"]);