function biggerHalf(arr) {

    let sorted = arr.sort((a, b) => a - b)

    if (sorted.length % 2 == 0) {
        let start = sorted.length / 2;
        let result = sorted.splice(start);
        return result;
    }
    else {
        let start = Math.floor(sorted.length / 2);
        let result = sorted.splice(start);
        return result;
    }
}

biggerHalf([3, 19, 14, 7, 2, 19, 6])