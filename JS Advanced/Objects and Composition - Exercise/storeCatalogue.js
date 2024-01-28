function storeCatalogue(arr) {

    let parsed = [];

    for (let product of arr) {
        let [name, price] = product.split(' : ');
        price = Number(price);
        parsed[name] = price;
    }

    let sorted = Object.entries(parsed).sort((a, b) => a[0].localeCompare(b[0]));
    let start = sorted[0][0][0];

    console.log(start);

    for (let el of sorted) {
        let letter = el[0][0];

        if (letter !== start) {
            console.log(letter);
            start = letter;
        }
        console.log(`  ${el[0]}: ${el[1]}`);
    }
}

storeCatalogue(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'])