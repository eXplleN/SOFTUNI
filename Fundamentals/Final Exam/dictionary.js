function dictionary(arr) {

    let myLibrary = {};
    let wordDefinition = arr.shift().split(' | ');
    let wordsToCheck = arr.shift().split(' | ');
    let comand = arr.shift();

    for (let i = 0; i < wordDefinition.length; i++) {
        let tokens = wordDefinition[i].split(': ');
        let word = tokens[0];
        let definition = tokens[1];
        if (!myLibrary.hasOwnProperty(word)) {
            myLibrary[word] = { definition: [definition] };
        }
        else {
            myLibrary[word].definition.push(definition);
        }
    }

    if (comand == 'Hand Over') {
        let allWords = Object.keys(myLibrary);
        console.log(allWords.join(' '));
    }
    else {
        for (let i = 0; i < wordsToCheck.length; i++) {
            let wordToCheck = wordsToCheck[i];

            if (myLibrary.hasOwnProperty(wordToCheck)) {
                let definitions = myLibrary[wordToCheck].definition;
                console.log(`${wordToCheck}:`);

                for (let j = 0; j < definitions.length; j++) {
                    console.log(` -${definitions[j]}`);
                }
            }
        }
    }
}

dictionary(["care: worry, anxiety, or concern | care: a state of mind in which one istroubled | face: the front part of the head, from the forehead to the chin",

    "care | kitchen | flower",

    "Test"])