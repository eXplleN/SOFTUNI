function exerciseFour(n, k) {

    let arr = [1];

    for (let current = 1; current < n; current++) {
        let start = Math.max(0, current - k);
        let sum = 0;

        for (let i = start; i < current; i++) {
            sum += arr[i];
        }

        arr[current] = sum;
    }
    console.log(arr.join(' '));
}

exerciseFour(6, 3)
exerciseFour(8, 2)