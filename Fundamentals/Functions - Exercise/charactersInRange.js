function charactersInRange(char1, char2) {

    let symbol1 = char1.charCodeAt(0);
    let symbol2 = char2.charCodeAt(0);

    let str = [];

    if (symbol1 < symbol2) {
        for (let i = symbol1 + 1; i < symbol2; i++) {
            str.push(String.fromCharCode([i]));
        }
    }
    else if (symbol1 > symbol2) {
        for (let j = symbol2 + 1; j < symbol1; j++) {
            str.push(String.fromCharCode([j]));
        }
    }
    console.log(str.join(' '));
}

charactersInRange('a', 'd')
charactersInRange('#', ':')
charactersInRange('C', '#')