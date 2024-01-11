function aggregateElements(arr) {

    let sum = 0
    let sum2 = 0
    let concat = '';

    for (let i = 0; i < arr.length; i++) {
        let current = Number(arr[i]);
        sum += current;
        sum2 += 1 / current;
        concat += String(arr[i]);
    }

    console.log(sum);
    console.log(sum2);
    console.log(concat);

}

aggregateElements([2, 4, 8, 16])