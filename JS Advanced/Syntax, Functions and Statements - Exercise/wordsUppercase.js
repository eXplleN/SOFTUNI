function wordsUppercase(text) {

    let newText = text.split(/[^a-zA-Z0-9]+/).join(', ');
    let toUpper = newText.toUpperCase().trim();

    if (toUpper.endsWith(',')) {
        toUpper = toUpper.slice(0, -1);
    }
    console.log(toUpper);
}

wordsUppercase('Hi, how are you?')