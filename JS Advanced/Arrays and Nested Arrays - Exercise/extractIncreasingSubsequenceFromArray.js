function extractIncreasingSubsequenceFromArray(arr) {

    let result = [];
    let currBigest = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= currBigest) {
            currBigest = arr[i];
            result.push(arr[i]);
        }
    }
    return result;
}

extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24])