function orders(product, quantity) {

    switch (product) {
        case 'coffee': result = 1.50 * quantity;
            break;
        case 'water': result = 1 * quantity;
            break;
        case 'coke': result = 1.40 * quantity;
            break;
        case 'snacks': result = 2 * quantity;
            break;
    }
    console.log(result.toFixed(2));
}

orders("water", 5)
orders("coffee", 2)