function manOWar(arr) {

    let pirateShip = arr.shift().split('>').map(Number);
    let warShip = arr.shift().split('>').map(Number);
    let maxHealth = Number(arr.shift())
    let repair = maxHealth * 0.20;
    let winOrLose = false;

    for (let i = 0; i < arr.length; i++) {
        let step = arr[i].split(' ');
        let command = step.shift();

        if (command == 'Fire') {
            let index = Number(step[0]);
            let damage = Number(step[1]);

            if (index < warShip.length) {
                warShip[index] -= damage;

                if (warShip[index] <= 0) {
                    console.log(`You won! The enemy ship has sunken.`);
                    winOrLose = true;
                    break;
                }
            }
            else {
                continue;
            }
        }
        else if (command == 'Defend') {
            let start = Number(step[0]);
            let end = Number(step[1]);
            let damage = Number(step[2]);

            if (start < pirateShip.length && start >= 0 && end >= 0 && end < pirateShip.length) {
                let flag = false;
                for (let i = start; i <= end; i++) {
                    pirateShip[i] -= damage;
                    if (pirateShip[i] <= 0) {
                        console.log(`You lost! The pirate ship has sunken.`);
                        flag = true;
                        winOrLose = true;
                        break;
                    }
                }
                if (flag == true) {
                    break;
                }
            }
            else {
                continue;
            }
        }
        else if (command == 'Repair') {
            let index = Number(step[0]);
            let health = Number(step[1]);

            if (index < pirateShip.length) {
                if (pirateShip[index] + health >= maxHealth) {
                    pirateShip[index] = maxHealth;
                }
                else {
                    pirateShip[index] += health;
                }
            }
            else {
                continue;
            }
        }
        else if (command == 'Status') {
            let count = 0;
            for (let status of pirateShip) {
                if (status < repair) {
                    count++;
                }
            }
            console.log(`${count} sections need repair.`);
        }
        else {
            break;
        }
    }
    if (winOrLose == false) {

        let pirateStatus = 0;
        let warShipStatus = 0;

        for (let status of pirateShip) {
            pirateStatus += status;
        }

        for (let status of warShip) {
            warShipStatus += status;
        }

        console.log(`Pirate ship status: ${pirateStatus}`);
        console.log(`Warship status: ${warShipStatus}`);
    }
}

manOWar(["12>13>11>20>66", "12>22>33>44>55>32>18", "70", "Fire 2 11", "Fire 8 100", "Defend 3 6 11", "Defend 0 3 5", "Repair 1 33", "Status", "Retire"])
//manOWar(["2>3>4>5>2", "6>7>8>9>10>11", "20", "Status", "Fire 2 3", "Defend 0 4 11", "Repair 3 18", "Retire"])