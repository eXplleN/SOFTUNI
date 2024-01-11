function squareOfStars(num) {

    for (let i = 0; i < num; i++) {
        let symbol = '* ';
        console.log(symbol.repeat(num));
    }
}

squareOfStars(5)