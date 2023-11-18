function pascalCaseSplitter(str) {

    let toPrint = [];
    let wordToAdd = '';

    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        if (currentChar == currentChar.toUpperCase() && i > 0) {
            toPrint.push(wordToAdd);
            wordToAdd = currentChar;
        }
        else {
            wordToAdd += currentChar;
        }
    }
    toPrint.push(wordToAdd);

    console.log(toPrint.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')