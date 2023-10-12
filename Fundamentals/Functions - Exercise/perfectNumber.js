function perfectNumber(num) {

    let sum = 0;

    for (let i = 1; i <= num / 2; i++) {
        if (num % i == 0) {
            sum += i;
        }
    }

    if (num == sum && sum != 0) {
        console.log(`We have a perfect number!`);
    }
    else {
        console.log(`It's not so perfect.`);
    }
}

perfectNumber(6)
perfectNumber(28)
perfectNumber(1236498)