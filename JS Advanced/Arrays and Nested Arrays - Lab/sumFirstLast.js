function sumFirstLast(arr) {

    let sum = 0;
    let first = Number(arr[0]);
    let last = Number(arr[arr.length - 1]);

    sum = first + last;

    return sum;
}

sumFirstLast(['20', '30', '40'])