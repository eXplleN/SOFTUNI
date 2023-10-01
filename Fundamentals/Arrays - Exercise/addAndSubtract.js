function addAndSubtract(arr) {

    let newArr = [];
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < arr.length; i++) {
        sum1 += arr[i];
        if (arr[i] % 2 == 0) {
            newArr.push(arr[i] + i);
            sum2 += arr[i] + i;
        }
        else {
            newArr.push(arr[i] - i);
            sum2 += arr[i] - i;
        }
    }
    console.log(newArr);
    console.log(sum1);
    console.log(sum2);
}

addAndSubtract([5, 15, 23, 56, 35])
addAndSubtract([-5, 11, 3, 0, 2])