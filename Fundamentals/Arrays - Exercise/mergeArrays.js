function mergeArrays(arr1, arr2) {

    let newArr = [];
    let sumEven = 0;
    let odd = '';

    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 == 0) {
            sumEven += Number(arr1[i]) + Number(arr2[i]);
            newArr.push(sumEven);
        }
        else {
            odd += arr1[i] + arr2[i];
            newArr.push(odd);
        }
        sumEven = 0;
        odd = '';
    }

    console.log(newArr.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'])
mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44'])