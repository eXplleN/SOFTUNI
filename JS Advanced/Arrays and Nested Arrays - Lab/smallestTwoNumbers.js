function smallestTwoNumbers(arr) {

    let result = arr.sort((a, b) => a - b).splice(0, 2);
    console.log(result.join(' '));

}

smallestTwoNumbers([30, 15, 50, 5])