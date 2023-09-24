function familyTrip(input) {

    let budged = Number(input[0]);
    let nights = Number(input[1]);
    let nightPrice = Number(input[2]);
    let percentAtherSpends = Number(input[3]);

    let overall = 0;
    let atherSpe = 0;
    let allOverall = 0;

    if (nights > 7) {
        nightPrice *= 0.95;
        overall = nightPrice * nights;
        atherSpe = budged * (percentAtherSpends / 100);
        allOverall = overall + atherSpe;
    }
    else {
        overall = nightPrice * nights;
        atherSpe = budged * (percentAtherSpends / 100);
        allOverall = overall + atherSpe;
    }
    if (budged >= allOverall) {
        console.log(`Ivanovi will be left with ${(budged - allOverall).toFixed(2)} leva after vacation.`);
    }
    else {
        console.log(`${(allOverall - budged).toFixed(2)} leva needed.`);
    }

}

familyTrip(["500",
    "7",
    "66",
    "15"]);