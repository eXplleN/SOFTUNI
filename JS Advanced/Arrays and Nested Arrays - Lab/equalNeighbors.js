function equalNeighbors(matrix) {

    let count = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let b = 0; b < matrix[i].length; b++) {

            if (b < matrix[i].length - 1 && matrix[i][b] === matrix[i][b + 1]) {
                count++;
            }
            if (i < matrix.length - 1 && matrix[i][b] === matrix[i + 1][b]) {
                count++;
            }
        }
    }
    return count;
}

equalNeighbors([['2', '3', '4', '7', '0'],

['4', '0', '5', '3', '4'],

['2', '3', '5', '4', '2'],

['9', '8', '7', '5', '4']])