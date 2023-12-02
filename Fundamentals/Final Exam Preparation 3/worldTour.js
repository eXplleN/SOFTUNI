function worldTour(arr) {

    let text = arr.shift();

    while (arr[0] != 'Travel') {
        let tokens = arr.shift().split(':');
        let comand = tokens[0];

        switch (comand) {
            case 'Add Stop':
                let index = Number(tokens[1]);
                let stopToAdd = tokens[2];
                if (index >= 0 && index < text.length) {
                    text = text.slice(0, index) + stopToAdd + text.slice(index);
                }
                console.log(text);
                break;

            case 'Remove Stop':
                let startIndex = Number(tokens[1]);
                let endIndex = Number(tokens[2]);
                if (startIndex >= 0 && startIndex < text.length && endIndex < text.length && endIndex >= 0) {
                    let firstHalf = text.slice(0, startIndex);
                    let secondHalf = text.slice(endIndex + 1);
                    text = firstHalf + secondHalf;
                }
                console.log(text);
                break;

            case 'Switch':
                let oldString = tokens[1];
                let newString = tokens[2];
                if (text.includes(oldString)) {
                    text = text.replace(oldString, newString)
                }
                console.log(text);
                break;
        }
    }
    console.log(`Ready for world tour! Planned stops: ${text}`);
}

worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"])