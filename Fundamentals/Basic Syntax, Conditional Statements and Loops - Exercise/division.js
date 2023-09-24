function division(num) {

    let dnum = 0;
    if (num % 10 == 0) {
        dnum = 10;
    }
    else if (num % 10 == 0 && num % 2 == 0) {
        dnum = 10;
    }
    else if (num % 7 == 0) {
        dnum = 7;
    }
    else if (num % 6 == 0) {
        dnum = 6;
    }
    else if (num % 3 == 0 && num % 2 == 0) {
        dnum = 6;
    }
    else if (num % 3 == 0) {
        dnum = 3;
    }
    else if (num % 2 == 0) {
        dnum = 2;
    }
    if (dnum > 0) {
        console.log(`The number is divisible by ${dnum}`);
    }
    else {
        console.log(`Not divisible`);
    }
}

division(30)
division(15)
division(12)
division(1643)