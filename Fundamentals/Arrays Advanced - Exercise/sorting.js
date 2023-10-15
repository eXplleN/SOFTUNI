function sorting(arr) {

    let newArr = arr.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < newArr.length; i++) {
        let max = newArr.pop();
        let min = newArr.shift();
        result.push(max, min);

    }
    let max = newArr.pop();
    let min = newArr.shift();
    result.push(max, min);

    console.log(result.join(' '));

}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])