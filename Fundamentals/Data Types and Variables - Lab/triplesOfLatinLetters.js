function triplesOfLatinLetters(n) {

    for (let i = 0; i < n; i++) {
        let first = String.fromCharCode(i + 97);
        for (let a = 0; a < n; a++) {
            let second = String.fromCharCode(a + 97);
            for (let b = 0; b < n; b++) {
                let third = String.fromCharCode(b + 97);
                console.log(`${first}${second}${third}`);
            }
        }
    }
}

triplesOfLatinLetters('3')
console.log(`-----------`)
triplesOfLatinLetters(2)