function poolDay(input) {

    let people = Number(input[0]);
    let entrancePrice = Number(input[1]);
    let shezlongPrice = Number(input[2]);
    let umbrelaPrice = Number(input[3]);

    let entranceOverall = people * entrancePrice;
    let shezlongOverall = Math.ceil(people * 0.75) * shezlongPrice;
    let umbrelaOverall = Math.ceil(people * 0.50) * umbrelaPrice;

    let priceOverall = entranceOverall + shezlongOverall + umbrelaOverall;

    console.log(`${priceOverall.toFixed(2)} lv.`);
}

poolDay(["21", "5.50", "4.40", "6.20"]);