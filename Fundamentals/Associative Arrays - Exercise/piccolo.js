function piccolo(arr) {

    let parkingLot = [];

    for (let i = 0; i < arr.length; i++) {
        let [command, carNumber] = arr[i].split(', ');

        if (command == 'IN') {
            if (parkingLot.includes(carNumber)) {
                continue;
            }
            else {
                parkingLot.push(carNumber);
            }
        }
        else {
            if (parkingLot.includes(carNumber)) {
                parkingLot.splice(parkingLot.indexOf(carNumber), 1);
            }
        }
    }

    if (parkingLot.length == 0) {
        console.log(`Parking Lot is Empty`);
        return;
    }

    let sorted = parkingLot.sort((a, b) => a.localeCompare(b));

    for (let car of sorted) {
        console.log(car);
    }
}

piccolo(['IN, CA2844AA',

    'IN, CA1234TA',

    'OUT, CA2844AA',

    'IN, CA9999TT',

    'IN, CA2866HI',

    'OUT, CA1234TA',

    'IN, CA2844AA',

    'OUT, CA2866HI',

    'IN, CA9876HH',

    'IN, CA2822UU'])