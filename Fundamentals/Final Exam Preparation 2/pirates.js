function pirates(arr) {

    let cityNames = {};

    while (arr[0] != 'Sail') {
        let [name, population, gold] = arr.shift().split('||');
        if (cityNames.hasOwnProperty(name)) {
            cityNames[name].population += Number(population);
            cityNames[name].gold += Number(gold);
        }
        else {
            cityNames[name] = { population: Number(population), gold: Number(gold) };
        }
    }

    arr.shift();

    while (arr[0] != 'End') {
        let tokens = arr.shift().split('=>');
        let command = tokens[0];

        switch (command) {
            case 'Plunder':
                let town = cityNames[tokens[1]];
                town.population -= Number(tokens[2]);
                town.gold -= Number(tokens[3]);
                console.log(`${tokens[1]} plundered! ${tokens[3]} gold stolen, ${tokens[2]} citizens killed.`);
                if (town.population == 0 || town.gold == 0) {
                    console.log(`${tokens[1]} has been wiped off the map!`);
                    delete cityNames[tokens[1]];
                }
                break;
            case 'Prosper':
                let city = cityNames[tokens[1]];
                if (tokens[2] < 0) {
                    console.log(`Gold added cannot be a negative number!`);
                }
                else {
                    city.gold += Number(tokens[2]);
                    console.log(`${tokens[2]} gold added to the city treasury. ${tokens[1]} now has ${city.gold} gold.`);
                }
                break;
        }
    }

    if (Object.keys(cityNames).length != 0) {
        console.log(`Ahoy, Captain! There are ${Object.keys(cityNames).length} wealthy settlements to go to:`);
        for (let twn in cityNames) {
            let { population, gold } = cityNames[twn];
            console.log(`${twn} -> Population: ${population} citizens, Gold: ${gold} kg`);
        }
    }
    else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }
}

pirates(["Nassau||95000||1000",

    "San Juan||930000||1250",

    "Campeche||270000||690",

    "Port Royal||320000||1000",

    "Port Royal||100000||2000",

    "Sail",

    "Prosper=>Port Royal=>-200",

    "Plunder=>Nassau=>94000=>750",

    "Plunder=>Nassau=>1000=>150",

    "Plunder=>Campeche=>150000=>690",

    "End"])