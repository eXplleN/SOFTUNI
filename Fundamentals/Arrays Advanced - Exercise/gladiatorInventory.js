function gladiatorInventory(arr) {

    let inventory = arr.shift().split(' ');

    for (let i = 0; i < arr.length; i++) {
        let [command, equipment] = arr[i].split(' ');

        switch (command) {
            case 'Buy':
                let check = inventory.includes(equipment);
                if (check == false) {
                    inventory.push(equipment);
                }
                break;
            case 'Trash':
                let search = inventory.indexOf(equipment);
                if (search != -1) {
                    inventory.splice(search, 1);
                }
                break;
            case 'Repair':
                let includes = inventory.indexOf(equipment);
                if (includes != -1) {
                    inventory.splice(includes, 1);
                    inventory.push(equipment);
                }
                break;
            case 'Upgrade':
                let [item, material] = equipment.split('-');
                let lookFor = inventory.indexOf(item);
                if (lookFor != -1) {
                    inventory.splice(lookFor + 1, 0, `${item}:${material}`);
                }
                break;
        }
    }
    console.log(inventory.join(' '));
}

gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel'])
gladiatorInventory(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V'])