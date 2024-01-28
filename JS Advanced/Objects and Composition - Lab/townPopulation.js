function townPopulation(arr) {

    let cities = {};

    for (let i = 0; i < arr.length; i++) {
        let [name, population] = arr[i].split(' <-> ');

        if (cities.hasOwnProperty(name)) {
            cities[name] += Number(population);
        }
        else {
            cities[name] = Number(population);
        }
    }

    let entries = Object.entries(cities);

    for (let city of entries) {
        let [name, population] = city;
        console.log(`${name} : ${population}`);
    }
}
townPopulation(['Sofia <-> 1200000',

'Montana <-> 20000',

'New York <-> 10000000',

'Washington <-> 2345000',

'Las Vegas <-> 1000000'])