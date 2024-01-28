function sortingNumbers(arr) {

    let sorted = arr.sort((a, b) => a - b);

    let smallest = sorted.slice(0, sorted.length / 2);
    let bigest = sorted.slice(sorted.length / 2).reverse();

    let result = [];

    for (let i = 0; i < bigest.length; i++) {
        if (smallest[i] !== undefined && bigest[i] !== undefined) {
            result.push(smallest[i], bigest[i]);
        }
        else {
            result.push(bigest[i]);
        }
    }
    return result;
}

sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21])