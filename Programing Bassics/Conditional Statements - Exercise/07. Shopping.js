function shopping(input){

    let budget = Number(input[0]);
    let videoCards = Number(input[1]) * 250;
    let processors = Number(input[2]);
    let ram = Number(input[3]);

    let processorsPrise = (videoCards * 0.35) * processors;
    let ramPrise = (videoCards * 0.10) * ram;
    let totalPrise = 0.0;
    let totalPrise1 = videoCards + processorsPrise + ramPrise;
    
    if (Number(input[1]) > processors){
        totalPrise = (videoCards + processorsPrise + ramPrise) * 0.85;
        if (budget >= totalPrise){
            console.log(`You have ${(budget - totalPrise).toFixed(2)} leva left!`);
        }
        else {
            console.log(`Not enough money! You need ${(totalPrise - budget).toFixed(2)} leva more!`);
        }
    }

    else {
        if (budget >= totalPrise1){
            console.log(`You have ${(budget - totalPrise1).toFixed(2)} leva left!`);
        }
        else {
            console.log(`Not enough money! You need ${(totalPrise1 - budget).toFixed(2)} leva more!`);
        }
    }


}
shopping(["920.45","3","1","1"]);