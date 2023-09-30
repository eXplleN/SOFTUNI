function reverseAnArrayOfNumbers(n, inputArr) {

    let arr = [];

    for (let i = 0; i < n; i++) {
        arr[i] = inputArr[i];
    }

    let reversed = [];

    for (let i = n - 1; i >= 0; i--) {
        reversed[reversed.length] = arr[i];
    }
    
    console.log(reversed.join(' '));
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5])
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47])