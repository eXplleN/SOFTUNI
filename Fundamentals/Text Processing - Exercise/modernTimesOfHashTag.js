function modernTimesOfHashTag(str) {

    let words = [];

    let toArr = str.split(' ');

    for (let word of toArr) {
        if (word.includes('#')) {
            if (word.length > 1) {
                let found = word.substring(1);
                if (/^[a-zA-Z]+$/.test(found) == true) {
                    words.push(found);
                }
            }
        }
    }
    console.log(words.join('\n'));
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')