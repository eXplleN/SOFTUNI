function revealWords(word, str) {

    let replaceWith = word.split(', ');

    for (let word of replaceWith) {
        let count = word.length;

        let stars = '*'.repeat(count);
        str = str.replace(stars, word);
    }

    console.log(str);
}

revealWords('great',

    'softuni is ***** place for learning new programming languages')