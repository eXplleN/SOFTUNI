function secretChat(arr) {

    let message = arr.shift();
    let command = arr.shift();

    while (command != 'Reveal') {
        let step = command.split(':|:');
        let commName = step[0];

        if (commName == 'InsertSpace') {
            let indexToAdd = step[1]
            let newMessege = message.slice(0, indexToAdd) + ' ' + message.slice(indexToAdd);
            message = newMessege;
            console.log(message);
        }
        else if (commName == 'Reverse') {
            let substring = step[1];
            if (message.includes(substring)) {
                let start = message.indexOf(substring);
                let cuted = message.substring(start);
                let reversed = cuted.split('').reverse().join('');
                let final = message.substring(0, start) + reversed;
                message = final;
                console.log(message);
            }
            else {
                console.log(`error`);
            }
        }
        else {
            let substring = step[1];
            let replacement = step[2];
            let newMessage = message.replace(new RegExp(substring, 'g'), replacement);
            message = newMessage;
            console.log(message);
        }


        command = arr.shift();
    }
    console.log(`You have a new text message: ${message}`);
}

secretChat([

    'heVVodar!gniV',

    'ChangeAll:|:V:|:l',

    'Reverse:|:!gnil',

    'InsertSpace:|:5',

    'Reveal'

])