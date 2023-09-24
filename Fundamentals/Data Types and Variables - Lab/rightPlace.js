function rightPlace(str, char, result) {

    let output = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] == '_') {
            output += char;
        }
        else {
            output += str[i];
        }
    }
    if (output == result) {
        console.log(`Matched`);
    }
    else {
        console.log(`Not Matched`);
    }
}

rightPlace('Str_ng', 'I', 'Strong')
rightPlace('Str_ng', 'i', 'String')