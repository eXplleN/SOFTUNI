function processOddPositions(arr) {

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            newArr.push(arr[i] * 2);
        }
    }

    let sorted = newArr.reverse();

    return sorted.join(' ');
}

processOddPositions([10, 15, 20, 25])