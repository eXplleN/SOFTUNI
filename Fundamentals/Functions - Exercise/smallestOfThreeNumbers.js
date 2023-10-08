function smallestOfThreeNumbers(int1, int2, int3) {

    let arr = [];
    arr.push(int1, int2, int3)

    let smallest = arr[0];

    for (let i = 0; i < arr.length; i++) {

        if (smallest > arr[i]) {
            smallest = arr[i];
        }
    }
    console.log(smallest);
}

smallestOfThreeNumbers(2, 5, 3)
smallestOfThreeNumbers(600, 342, 123)
smallestOfThreeNumbers(25, 21, 4)
smallestOfThreeNumbers(2, 2, 2)