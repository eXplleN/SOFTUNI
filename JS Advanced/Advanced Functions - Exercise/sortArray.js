function sortArray(arr, command) {

    let sorted = arr;

    if (command === "asc") {
        sorted.sort((a, b) => a - b);
    }
    else {
        sorted.sort((a, b) => b - a);
    }

    return sorted;
}

sortArray([14, 7, 17, 6, 8], 'desc')