function houseParty(arr) {

    let list = [];

    for (let i = 0; i < arr.length; i++) {
        let goingOrNotGoing = [];
        goingOrNotGoing = arr[i].split(' ');

        if (goingOrNotGoing.length <= 3) {
            let check = list.includes(goingOrNotGoing[0]);
            if (check == false) {
                list.push(goingOrNotGoing[0]);
            }
            else {
                console.log(`${goingOrNotGoing[0]} is already in the list!`);
            }
        }
        else {
            let check = list.includes(goingOrNotGoing[0]);

            if (check == true) {
                list = list.filter(item => item !== goingOrNotGoing[0]);
                continue;
            }
            console.log(`${goingOrNotGoing[0]} is not in the list!`);
        }

    }
    console.log(list.join('\n'));
}

houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!', 'George is going!'])
//houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!'])
