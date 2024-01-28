function negativePositiveNumbers(arr) {

    let sorted = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            sorted.unshift(arr[i]);
        }
        else {
            sorted.push(arr[i]);
        }
    }

    for (el of sorted) {
        console.log(el);
    }
}

negativePositiveNumbers([3, -2, 0, -1])