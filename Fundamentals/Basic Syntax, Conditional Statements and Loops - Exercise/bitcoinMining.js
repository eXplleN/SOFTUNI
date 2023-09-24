function bitcoinMining(input) {

    let totalLeva = 0;
    let dayCount = 0;
    let dayCount2 = 0;
    let firstBcoin = 0;
    let bitCoins = 0;

    for (let i = 0; i < input.length; i++) {

        dayCount++;
        dayCount2++

        if (dayCount == 3) {
            gold = input[i];
            gold *= 0.70;
            totalLeva += gold * 67.51;
            dayCount = 0;
        }
        else {
            gold = input[i];
            totalLeva += gold * 67.51;
        }

        while (totalLeva > 11949.16) {
            if (totalLeva >= 11949.16) {

                if (firstBcoin == 0) {
                    firstBcoin = dayCount2;
                    bitCoins++;
                    totalLeva -= 11949.16;
                }
                else {
                    bitCoins++;
                    totalLeva -= 11949.16;
                }
            }
        }
    }

    console.log(`Bought bitcoins: ${bitCoins}`);

    if (bitCoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBcoin}`);
    }
    console.log(`Left money: ${totalLeva.toFixed(2)} lv.`);

}


bitcoinMining([3124.15, 504.212, 2511.124])