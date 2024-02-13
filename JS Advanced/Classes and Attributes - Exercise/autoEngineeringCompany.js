function autoEngineeringCompany(arr) {

    let storage = {};

    for (let el of arr) {
        let [carBrand, carModel, producedCars] = el.split(" | ");
        producedCars = Number(producedCars);

        if (!storage.hasOwnProperty(carBrand)) {
            storage[carBrand] = {};
        }

        if (!storage[carBrand].hasOwnProperty(carModel)) {
            storage[carBrand][carModel] = 0;
        }

        storage[carBrand][carModel] += producedCars;

    }

    for (let el of Object.entries(storage)) {
        let brand = el[0];
        let models = Object.entries(el[1]);
        console.log(`${brand}`);

        for (let curr of models) {
            let model = curr[0];
            let value = curr[1];
            console.log(`###${model} -> ${value}`);
        }
    }
}

autoEngineeringCompany(['Audi | Q7 | 1000',

    'Audi | Q6 | 100',

    'BMW | X5 | 1000',

    'BMW | X6 | 100',

    'Citroen | C4 | 123',

    'Volga | GAZ-24 | 1000000',

    'Lada | Niva | 1000000',

    'Lada | Jigula | 1000000',

    'Citroen | C4 | 22',

    'Citroen | C5 | 10'])