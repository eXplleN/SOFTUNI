function stringSubstring(word, text) {

    let convertedText = text.toLowerCase().split(' ');
    let flag = false;

    for (let current of convertedText) {
        if (current == word) {
            console.log(current);
            flag = true;
            break;
        }
    }

    if (flag == false) {
        console.log(`${word} not found!`);
    }

}

stringSubstring('javascript',

    'JavaScript is the best programming language')