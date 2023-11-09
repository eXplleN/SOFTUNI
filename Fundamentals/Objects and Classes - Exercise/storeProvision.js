function storeProvision(stock, ordered) {

    let obj1 = {};

    for (let i = 0; i < stock.length; i++) {
        let current = stock.splice(0, 2);
        obj1[current[0]] = Number(current[1]);
        i = 0;
    }

    for (let i = 0; i < ordered.length; i++) {
        let current = ordered.splice(0, 2);
        if (obj1.hasOwnProperty(current[0])) {
            obj1[current[0]] += Number(current[1]);
        }
        else {
            obj1[current[0]] = Number(current[1]);
        }
        i = 0;
    }
    let entries = Object.entries(obj1);

    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])