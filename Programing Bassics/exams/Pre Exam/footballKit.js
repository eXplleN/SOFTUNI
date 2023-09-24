function footballKit(input) {

    let tshirtPrice = Number(input[0]);
    let neededMoneyForBall = Number(input[1]);

    let shorts = tshirtPrice * 0.75;
    let socks = shorts * 0.20;
    let shoes = (tshirtPrice + shorts) * 2;

    let priceOverAll = tshirtPrice + shorts + socks + shoes;
    let priceAfterDiscount = priceOverAll * 0.85;

    if (priceAfterDiscount >= neededMoneyForBall) {
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${priceAfterDiscount.toFixed(2)} lv.`);
    }
    else {
        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${(neededMoneyForBall - priceAfterDiscount).toFixed(2)} lv. more.`);
    }


}

footballKit(["59.99",
    "500"]);