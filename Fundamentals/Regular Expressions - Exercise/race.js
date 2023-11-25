function race(arr) {

    let patternName = /[a-zA-Z]+/g;
    let patternNum = /\d/g;

    let list = arr.shift().split(', ');

    let final = {};

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == 'end of race') {
            break;
        }

        let numbers = arr[i].match(patternNum).map(Number);
        let sum = numbers.reduce((acc, num) => acc + num, 0);
        let name = arr[i].match(patternName).join('');

        if (list.includes(name)) {
            if (final.hasOwnProperty(name)) {
                final[name] += sum;
            }
            else {
                final[name] = sum;
            }
        }
    }

    let sorted = Object.entries(final).sort((a, b) => b[1] - a[1]).slice(0, 3);

    let finalList = [];

    for (let [name, value] of sorted) {
        finalList.push(name);
    }

    console.log(`1st place: ${finalList[0]}`);
    console.log(`2nd place: ${finalList[1]}`);
    console.log(`3rd place: ${finalList[2]}`);
}

race(['George, Peter, Bill, Tom',

    'G4e@55or%6g6!68e!!@ ',

    'R1@!3a$y4456@',

    'B5@i@#123ll',

    'G@e54o$r6ge#',

    '7P%et^#e5346r',

    'T$o553m&6',

    'end of race'])