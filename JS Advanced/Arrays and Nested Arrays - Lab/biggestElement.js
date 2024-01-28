function biggestElement(matrix) {

    let results = [];

    for (let i = 0; i < matrix.length; i++) {
        let current = matrix[i];
        let sorted = current.sort((a, b) => b - a);
        results.push(sorted[0]);
    }

    let final = results.sort((a, b) => b - a);

    return final[0];
}

biggestElement([[20, 50, 10], [8, 33, 145]])