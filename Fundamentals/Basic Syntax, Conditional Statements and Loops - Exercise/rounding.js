function rounding(num, num2) {

    if (num2 <= 15) {
        console.log(`${parseFloat(num.toFixed(num2))}`);
    }
    else {
        console.log(`${parseFloat(num.toFixed(15))}`);
    }
}

rounding(10.5, 3)