function phoneBook(arr) {

    let phBooke = {};

    for (let conntact of arr) {
        let [key, value] = conntact.split(' ');
        phBooke[key] = value;
    }

    for (let [key, value] of Object.entries(phBooke)) {
        console.log(`${key} -> ${value}`);
    }
}

phoneBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344'])