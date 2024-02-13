function juiceFlavors(arr) {

    let bottelesStore = {};
    let juiceStore = {};

    for (let el of arr) {
        let [fruit, qty] = el.split(" => ");
        qty = Number(qty);
        let bottles = Math.floor(qty / 1000);
        let qtyLeft = qty - (bottles * 1000);

        if (qty >= 1000) {

            if (bottelesStore.hasOwnProperty(fruit)) {
                bottelesStore[fruit] += bottles;
            }
            else {
                bottelesStore[fruit] = bottles;
            }

            if (qtyLeft > 0) {
                if (juiceStore.hasOwnProperty(fruit)) {
                    juiceStore[fruit] += qtyLeft;
                    if (juiceStore[fruit] >= 1000) {
                        let newBottles = Math.floor(juiceStore[fruit] / 1000);
                        juiceStore[fruit] = juiceStore[fruit] - (newBottles * 1000);

                        if (bottelesStore.hasOwnProperty(fruit)) {
                            bottelesStore[fruit] += newBottles;
                        }
                        else {
                            bottelesStore[fruit] = newBottles;
                        }
                    }
                }
                else {
                    juiceStore[fruit] = qtyLeft;
                }
            }
        }
        else {
            if (juiceStore.hasOwnProperty(fruit)) {
                juiceStore[fruit] += qty;
                if (juiceStore[fruit] >= 1000) {
                    let newBottles = Math.floor(juiceStore[fruit] / 1000);
                    juiceStore[fruit] = juiceStore[fruit] - (newBottles * 1000);

                    if (bottelesStore.hasOwnProperty(fruit)) {
                        bottelesStore[fruit] += newBottles;
                    }
                    else {
                        bottelesStore[fruit] = newBottles;
                    }
                }
            }
            else {
                juiceStore[fruit] = qty;
            }
        }
    }

    for (let el of Object.entries(bottelesStore)) {
        let fruit = el[0];
        let qty = el[1];

        console.log(`${fruit} => ${qty}`);
    }
}

juiceFlavors(['Orange => 2000',

'Peach => 1432',

'Banana => 450',

'Peach => 600',

'Strawberry => 549'])