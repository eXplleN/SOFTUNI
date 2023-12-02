function theImitationGame(arr) {

    let message = arr.shift();

    while (arr[0] != 'Decode') {
        let current = arr.shift().split('|');
        let command = current[0];

        switch (command) {
            case 'Move':
                let index = Number(current[1]);
                let lettersToMove = message.slice(index) + message.slice(0, index);
                message = lettersToMove;
                break;
            case 'Insert':
                let insertIndex = Number(current[1]);
                let value = current[2];
                let newMessage = message.slice(0, insertIndex) + value + message.slice(insertIndex);
                message = newMessage;
                break;
            case 'ChangeAll':
                let lettersToReplace = current[1];
                let replacement = current[2];
                while (message.includes(lettersToReplace)) {
                    let messageWithReplacement = message.replace(lettersToReplace, replacement);
                    message = messageWithReplacement;
                }
                break;
        }
    }
    console.log(`The decrypted message is: ${message}`);
}

theImitationGame([

    'zzHe',

    'ChangeAll|z|l',

    'Insert|2|o',

    'Move|3',

    'Decode'

])