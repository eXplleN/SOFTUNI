function argumentInfo() {

    let storage = {};

    for (let i = 0; i < arguments.length; i++) {
        let arg = arguments[i];
        if (storage.hasOwnProperty(typeof arg)) {
            storage[typeof arg] += 1;
        }
        else {
            storage[typeof arg] = 1;
        }
        console.log(`${typeof arg}: ${arg}`);
    }

    let sorted = Object.entries(storage).sort((a, b) => b[1] - a[1]);
    for (let el of sorted) {
        let [key, value] = el;
        console.log(`${key} = ${value}`);
    }
}

argumentInfo({ name: 'bob'}, 3.333, 9.999)