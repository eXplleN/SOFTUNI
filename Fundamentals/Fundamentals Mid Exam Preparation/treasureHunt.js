function treasureHunt(arr) {

    let chestLoot = arr.shift().split('|');

    for (let i = 0; i < arr.length; i++) {
        let steps = arr[i].split(' ');
        let command = steps.shift();

        if (command == 'Loot') {
            for (let loot of steps) {
                let check = chestLoot.includes(loot);
                if (check == false) {
                    chestLoot.unshift(loot);
                }
            }
        }
        else if (command == 'Drop') {
            let num = Number(steps[0]);

            if (num < chestLoot.length && num >= 0) {
                let take = chestLoot[num];
                chestLoot.splice(num, 1);
                chestLoot.push(take);
            }
        }
        else if (command == 'Steal') {
            let num = Number(steps[0]);

            if (num < chestLoot.length) {
                let indexToStart = chestLoot.length - num;
                let taken = chestLoot.splice(indexToStart);
                console.log(taken.join(', '));
            }
            else {
                let taken = chestLoot.splice(0);
                console.log(taken.join(', '));
            }

        }
        else {
            break;
        }
    }

    if (chestLoot.length == []) {
        console.log(`Failed treasure hunt.`);
    }
    else {
        let totalHunt = 0;
        let count = 0;

        for (let loot of chestLoot) {
            count++;
            totalHunt += loot.length;
        }
        console.log(`Average treasure gain: ${(totalHunt / count).toFixed(2)} pirate credits.`);
    }
}

//treasureHunt(["Gold|Silver|Bronze|Medallion|Cup", "Loot Wood Gold Coins", "Loot Silver Pistol", "Drop 3", "Steal 3", "Yohoho!"])
treasureHunt(["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"])