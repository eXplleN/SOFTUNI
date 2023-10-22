function burgerBus(arr) {

    let cityNum = Number(arr.shift());
    let count = 0;
    let profit = 0;

    for (let i = 0; i < arr.length; i++) {
        count++;
        let currentCity = arr.splice(0, 3);
        let cityName = currentCity.shift();
        let income = Number(currentCity[0]);
        let expenses = Number(currentCity[1]);

        if (count % 3 == 0 && count % 5 == 0) {
            income *= 0.90;
        }
        else if (count % 3 == 0) {
            expenses *= 1.50;
        }
        else if (count % 5 == 0) {
            income *= 0.90;
        }

        profit += income - expenses;
        console.log(`In ${cityName} Burger Bus earned ${(income - expenses).toFixed(2)} leva.`);
        i = - 1;
    }
    console.log(`Burger Bus total profit: ${profit.toFixed(2)} leva.`);
}

//burgerBus(["3", "Sofia", "895.67", "213.50", "Plovdiv", "2563.20", "890.26", "Burgas", "2360.55", "600.00"])
burgerBus(["5", "Lille", "2226.00", "1200.60", "Rennes", "6320.60", "5460.20", "Reims", "600.20", "452.32", "Bordeaux", "6925.30", "2650.40", "Montpellier", "680.50", "290.20"])