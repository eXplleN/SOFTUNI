function mirrorWords(arr) {

    let text = arr[0]
    let mirrors = {};
    let pattern = /([@#])(?<wordOne>[a-zA-Z]{3,})\1{2}(?<wordTwo>[a-zA-Z]{3,})\1/g;
    let splitPattern = /[@|#]/;
    let matched = text.match(pattern);

    if (matched && matched.length > 0) {
        console.log(`${matched.length} word pairs found!`);
        for (let pair of matched) {
            let splited = pair.split(splitPattern);
            let firstWord = splited[1];
            let secondWord = splited[3];

            let reversed = secondWord.split('').reverse().join('');

            if (firstWord == reversed) {
                mirrors[firstWord] = secondWord;
            }
        }
    }

    if (matched == null) {
        console.log(`No word pairs found!`);
    }


    if (Object.entries(mirrors).length != 0) {
        console.log(`The mirror words are:`);
        let output = '';
        for (let [key, value] of Object.entries(mirrors)) {
            output += `${key} <=> ${value}, `;
        }
        console.log(output.slice(0, -2));
    }
    else {
        console.log(`No mirror words!`);
    }
}

mirrorWords([

    `#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#`

])