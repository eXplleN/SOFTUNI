function aMinerTask(arr) {

    let chest = {};

    for (let i = 0; i < arr.length; i++) {
        let key = arr.shift();
        let value = Number(arr.shift());
        if (key in chest) {
            chest[key] += value;
        }
        else {
            chest[key] = value;
        }
        i = -1;
    }

    for (let [key, value] of Object.entries(chest)) {
        console.log(`${key} -> ${value}`);
    }
}

aMinerTask(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15'])