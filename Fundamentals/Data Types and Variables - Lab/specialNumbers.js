function specialNumbers(n) {

    for (let i = 1; i <= n; i++) {
        let currentNum = i;
        let sumOfDigits = 0;

        while (currentNum > 0) {
            sumOfDigits += currentNum % 10;
            currentNum = Math.trunc(currentNum / 10);
        }

        let isSpecial = sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11;

        console.log(isSpecial ? `${i} -> True` : `${i} -> False`);
    }
}

specialNumbers(15)
console.log(`---------`)
specialNumbers(20)