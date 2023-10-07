function signCheck(num1, num2, num3) {

    let arr = [];
    arr.push(num1, num2, num3);

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }

    if (count == 3 || count == 1) {
        console.log(`Negative`);
    }
    else {
        console.log(`Positive`);
    }
}

signCheck(5, 12, -15)
signCheck(-6, -12, 14)
signCheck(-1, -2, -3)
signCheck(-5, 1, 1)