function maxNumber(arr) {

    let newArr = [];
    let bigger = -1;

    for (let i = arr.length ; i >= 0; i--) {
        if (bigger < arr[i]) {
            bigger = arr[i];
            newArr.push(bigger);   
        }
    }
    newArr.reverse();
    console.log(newArr.join(' '));
}

maxNumber([1, 4, 3, 0])
maxNumber([14, 24, 3, 19, 15, 17])
maxNumber([27, 19, 42, 2, 13, 45, 48])
maxNumber([41, 41, 34, 20])