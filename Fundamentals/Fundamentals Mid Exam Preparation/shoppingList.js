function shoppingList(str) {

    let rooms = str.split('|');

    let health = 100;
    let bitcoins = 0;
    let roomCount = 0;

    for (let i = 0; i < rooms.length; i++) {
        roomCount++;

        let [command, num] = rooms[i].split(' ');

        num = Number(num);

        if (command == 'potion') {
            if (health + num > 100) {
                let healed = 100 - health;
                health += healed;
                console.log(`You healed for ${healed} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
            else {
                health += num;
                console.log(`You healed for ${num} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
        }
        else if (command == 'chest') {
            bitcoins += num;
            console.log(`You found ${num} bitcoins.`);

        }
        else {
            health -= num;
            if (health <= 0) {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${roomCount}`);
                break;
            }
            else {
                console.log(`You slayed ${command}.`);
            }
        }
    }

    if (health > 0) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}

shoppingList("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")
//shoppingList("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")
