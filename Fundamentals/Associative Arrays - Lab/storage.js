function storage(arr) {

    let list = {};

    for (let item of arr) {
        let [product, quantity] = item.split(' ');
        if (product in list) {
            list[product] += Number(quantity);
        }
        else {
            list[product] = Number(quantity);
        }
    }

    for (let [product, quantity] of Object.entries(list)) {
        console.log(`${product} -> ${quantity}`);
    }
}

storage(['apple 50',

'apple 61',

'coffee 115',

'coffee 40'])