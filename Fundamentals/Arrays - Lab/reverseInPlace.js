function reverseInPlace(arr) {

    for (let i = 0; i < arr.length / 2; i++) {
        let j = arr.length - 1 - i;

        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    console.log(arr.join(' '));
}

reverseInPlace(['a', 'b', 'c', 'd', 'e'])
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop'])
reverseInPlace(['33', '123', '0', 'dd'])