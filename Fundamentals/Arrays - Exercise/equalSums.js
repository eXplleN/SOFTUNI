function equalSums(arr) {

    let result = 'no'

    for (let i = 0; i < arr.length; i++) {

        let sum1 = 0;
        let sum2 = 0;

        for (let j = 0; j < i; j++) {
            sum1 += arr[j];
        }

        for (let k = arr.length - 1; k > i; k--) {
            sum2 += arr[k];
        }

        if (sum1 === sum2) {
            result = i;
            break;
        }
    }
    console.log(result);
}

equalSums([1, 2, 3, 3])
console.log(`-----`);
equalSums([1, 2])
console.log(`-----`);
equalSums([1])
console.log(`-----`);
equalSums([1, 2, 3])
console.log(`-----`);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])
