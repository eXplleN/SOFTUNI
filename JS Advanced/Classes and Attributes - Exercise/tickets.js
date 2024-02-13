function tickets(arr, str) {

    class Ticket {
        destination;
        price;
        status;

        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let result = [];

    for (let el of arr) {
        let [destination, price, status] = el.split("|");
        result.push(new Ticket(destination, Number(price), status));
    }
    
    if (str === "price") {
        result.sort((a, b) => {
            return a[str] - b[str];
        });
    }
    else if (str === "status" || str === "destination") {
        result.sort((a, b) => {
            let nameA = a[str];
            let nameB = b[str];

            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
    }

    return result;
}

tickets(['Philadelphia|94.20|available',

'New York City|95.99|available',

'New York City|95.99|sold',

'Boston|126.20|departed'],

'destination')