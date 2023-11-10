function addressBook(arr) {

    let book = {};

    for (let personAndAddress of arr) {
        let [person, address] = personAndAddress.split(':');
        book[person] = address;
    }
    let sortedBook = Object.fromEntries(Object.entries(book).sort((a, b) => a[0].localeCompare(b[0])));

    for (let [person, address] of Object.entries(sortedBook)) {
        console.log(`${person} -> ${address}`);
    }
}

addressBook(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd'])