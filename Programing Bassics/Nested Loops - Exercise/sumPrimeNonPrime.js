function sumPrimeNonPrime(input) {
    let index = 0;
    let sumPrimeNUmbers = 0;
    let sumNonPrimeNumbers = 0;

    let command = input[index];
    index++;

    while (command !== "stop") {
        let num = Number(command);

        if (num < 0) {
            console.log(`Number is negative.`);
            command = input[index];
            index++;
            continue;
        }
        if (num == 1) {
            sumPrimeNUmbers += num;
            command = input[index];
            index++;
            continue;
        }
        let isPrime = true;

        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            sumPrimeNUmbers += num;
        }
        else {
            sumNonPrimeNumbers += num;
        }
        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrimeNUmbers}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeNumbers}`);

}
sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);