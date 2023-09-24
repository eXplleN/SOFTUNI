function triangleOfNumbers(n) {

    let a = '';
    for (let i = 1; i <= n; i++) {
        for (let b = 1; b <= i; b++) {
            a += ` ${i}`;
        }
        a += '\n';
    }
    console.log(a)
}

triangleOfNumbers(3)
triangleOfNumbers(5)
triangleOfNumbers(6)