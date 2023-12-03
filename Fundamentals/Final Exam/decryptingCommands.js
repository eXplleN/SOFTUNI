function decryptingCommands(arr) {

    let text = arr.shift();

    while (arr[0] != 'Finish') {
        let tokens = arr.shift().split(' ');
        let comand = tokens[0];

        switch (comand) {

            case 'Replace':
                let curentChar = tokens[1];
                let newChar = tokens[2];
                while (text.includes(curentChar)) {
                    text = text.replace(curentChar, newChar);
                }
                console.log(text);
                break;

            case 'Cut':
                let startIndex = Number(tokens[1]);
                let endIndex = Number(tokens[2]);
                if (startIndex >= 0 && startIndex < text.length && endIndex >= 0 && endIndex < text.length) {
                    let firstHalf = text.slice(0, startIndex);
                    let secondHalf = text.slice(endIndex + 1);
                    text = firstHalf + secondHalf;
                    console.log(text);
                }
                else {
                    console.log(`Invalid indices!`);
                }
                break;

            case 'Make':
                let upperOrLower = tokens[1];
                if (upperOrLower == 'Upper') {
                    text = text.toUpperCase();
                    console.log(text);
                }
                else {
                    text = text.toLowerCase();
                    console.log(text);
                }
                break;

            case 'Check':
                let string = tokens[1];
                if (text.includes(string)) {
                    console.log(`Message contains ${string}`);
                }
                else {
                    console.log(`Message doesn't contain ${string}`);
                }
                break;

            case 'Sum':
                let strtIndex = Number(tokens[1]);
                let ndIndex = Number(tokens[2]);
                let sum = 0;
                let subString = text.slice(strtIndex, ndIndex + 1);

                if (strtIndex >= 0 && strtIndex < text.length && ndIndex >= 0 && ndIndex < text.length) {
                    for (let i = 0; i < subString.length; i++) {
                        let asciivalue = Number(subString.charCodeAt(i));
                        sum += asciivalue;
                    }
                    console.log(sum);
                }
                else {
                    console.log(`Invalid indices!`);
                }

                break;
        }
    }
}

decryptingCommands(["HappyNameDay",

    "Replace p r",

    "Make Lower",

    "Cut 2 23",

    "Sum -2 2",

    "Finish"])