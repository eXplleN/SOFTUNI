function subSum(arr, start, end) {

    if (Array.isArray(arr) === false) {
        return NaN;
    }

    if (start < 0) {
        start = 0;
    }

    if (end >= arr.length) {
        end = arr.length - 1;
    }

    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += Number(arr[i]);
    }

    return parseFloat(sum.toFixed(2));
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300))