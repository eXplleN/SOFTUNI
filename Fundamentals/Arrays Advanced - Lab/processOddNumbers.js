function processOddNumbers(arr) {

    let odd = arr.filter((element, index) => index % 2 !== 0);
    let doubled = odd.map(element => element * 2);
    doubled.reverse();

    console.log(doubled.join(' '));
}

processOddNumbers([10, 15, 20, 25])
processOddNumbers([3, 0, 10, 4, 7, 3])