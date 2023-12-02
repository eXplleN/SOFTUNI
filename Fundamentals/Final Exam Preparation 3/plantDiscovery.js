function plantDiscovery(arr) {

    let n = Number(arr.shift());
    let plantsStorage = {};

    for (let i = 0; i < n; i++) {
        let tokens = arr.shift().split('<->');
        let plant = tokens[0];
        let rarity = Number(tokens[1]);
        if (!plantsStorage.hasOwnProperty(plant)) {
            plantsStorage[plant] = { rarity: rarity, rating: 0, count: 0 };
        }
        else {
            plantsStorage[plant].rarity = rarity;
        }
    }

    while (arr[0] != 'Exhibition') {
        let tokens = arr.shift().split(': ');
        let comand = tokens[0];

        switch (comand) {
            case 'Rate':
                let current = tokens[1].split(' - ');
                let plant = current[0];
                let rating = Number(current[1]);
                if (plantsStorage.hasOwnProperty(plant)) {
                    plantsStorage[plant].rating += rating;
                    plantsStorage[plant].count += 1;
                }
                else {
                    console.log(`error`);
                }
                break;

            case 'Update':
                let current1 = tokens[1].split(' - ');
                let plant1 = current1[0];
                let rarity = Number(current1[1]);
                if (plantsStorage.hasOwnProperty(plant1)) {
                    plantsStorage[plant1].rarity = rarity;
                }
                else {
                    console.log(`error`);
                }
                break;

            case 'Reset':
                let plant2 = tokens[1];
                if (plantsStorage.hasOwnProperty(plant2)) {
                    plantsStorage[plant2].rating = 0;
                    plantsStorage[plant2].count = 0;
                }
                else {
                    console.log(`error`);
                }
                break;
        }
    }

    if (Object.entries(plantsStorage).length != 0) {
        console.log(`Plants for the exhibition:`);
        for (let plnt in plantsStorage) {
            let { rarity, rating, count } = plantsStorage[plnt];
            let averageRating = 0
            if (rating != 0) {
                averageRating = rating / count;
            }
            console.log(`- ${plnt}; Rarity: ${rarity}; Rating: ${averageRating.toFixed(2)}`);
        }
    }
}

plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])