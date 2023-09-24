function excursionCalculator(input) {

    let people = Number(input[0]);
    let season = input[1];

    let price = 0;

    if (season === "spring") {
        if (people > 5) {
            price = people * 48.00;
        }
        else {
            price = people * 50.00;
        }
    }
    else if (season === "summer") {
        if (people > 5) {
            price = (people * 45.00) * 0.85;
        }
        else {
            price = (people * 48.50) * 0.85;
        }
    }
    else if (season === "autumn") {
        if (people > 5) {
            price = people * 49.50;
        }
        else {
            price = people * 60.00;
        }
    }
    else {
        if (people > 5) {
            price = (people * 85.00) * 1.08;
        }
        else {
            price = (people * 86.00) * 1.08;
        }
    }

    console.log(`${price.toFixed(2)} leva.`);

}

excursionCalculator(["20",
    "winter"]);