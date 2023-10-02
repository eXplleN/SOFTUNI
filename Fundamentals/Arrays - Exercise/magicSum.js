function magicSum(arr, num) {

    let sum = 0;
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length; j > i; j--) {
            sum = arr[i] + arr[j];
            if (sum == num) {
                newArr.push(arr[i], arr[j]);
                console.log(newArr.join(' '));
                newArr = [];
                sum = 0;
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8)
magicSum([14, 20, 60, 13, 7, 19, 8], 27)
magicSum([1, 2, 3, 4, 5, 6], 6)