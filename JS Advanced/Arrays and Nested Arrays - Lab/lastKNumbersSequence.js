function lastKNumbersSequence(n, k) {

    let arr = [];
    let sum = 0;

    while (arr.length !== n) {
        if (arr.length == 0) {
            arr.push(1);
        }
        else if (arr.length < k) {
            for (el of arr) {
                sum += el;
            }
            arr.push(sum);
            sum = 0;
        }
        else {
            for (let i = arr.length - k; i < arr.length; i++) {
                sum += arr[i];
            }
            arr.push(sum);
            sum = 0;
        }
    }
    return arr;
}

lastKNumbersSequence(8, 2)