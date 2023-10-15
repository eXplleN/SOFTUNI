function bombNumbers(sequence, bombArr) {

    let bomb = bombArr[0];
    let bombPower = bombArr[1];

    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] == bomb) {
            if (i - bombPower < 0) {
                sequence.splice(0, (bombPower * 2) + 1 - (Math.abs(i - bombPower)));
            }
            else {
                sequence.splice(i - bombPower, (bombPower * 2) + 1);
            }
            i = -1
        }
    }
    /*for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] == bomb) {
            if (i - bombPower < 0) {
                sequence.splice(0, (bombPower * 2) + 1 - (Math.abs(i - bombPower)));
            }
            else {
                sequence.splice(i - bombPower, (bombPower * 2) + 1);
            }
        }
    }*/

    let sum = 0;
    for (let j of sequence) {
        sum += j;
    }

    console.log(sum);
}

//bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 4])
//bombNumbers([1, 1, 4, 9, 8, 2, 1], [9, 2])
//bombNumbers([1, 7, 7, 1, 2, 3], [7, 1])
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 2, 1], [2, 1])