function sumDigits(num) {

    let numAsString = String([num]);
    let summ = 0;

    for (let i = 0; i < numAsString.length; i++) {
        summ += Number(numAsString[i]);
    }
    console.log(summ);
}

sumDigits(245678)
sumDigits(97561)
sumDigits(543)