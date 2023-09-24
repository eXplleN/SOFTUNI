function vacation(num, type, day) {

    let price = 0;

    if (day == 'Friday') {
        if (type == 'Students') {
            if (num >= 30) {
                price = (num * 8.45) * 0.85;
                console.log(`Total price: ${price.toFixed(2)}`);
            }
            else {
                price = num * 8.45
                console.log(`Total price: ${price.toFixed(2)}`);
            }
        }
        else if (type == 'Business') {
            if (num >= 100) {
                price = (num - 10) * 10.90;
                console.log(`Total price: ${price.toFixed(2)}`);
            }
            else {
                price = num * 10.90;
                console.log(`Total price: ${price.toFixed(2)}`);
            }
        }
        else {
            if (num >= 10 && num <= 20) {
                price = (num * 15) * 0.95;
                console.log(`Total price: ${price.toFixed(2)}`);
            }
            else {
                price = num * 15;
                console.log(`Total price: ${price.toFixed(2)}`);
            }
        }
    }
    else if (day == 'Saturday') {
        if (type == 'Students') {
            if (num >= 30) {
                price = (num * 9.80) * 0.85;
                console.log(`Total price: ${price.toFixed(2)}`);
            }
            else {
                price = num * 9.80;
                console.log(`Total price: ${price.toFixed(2)}`);
            }
        }
        else if (type == 'Business') {
            if (num >= 100) {
                price = (num - 10) * 15.60;
                console.log(`Total price: ${price.toFixed(2)}`);
            }
            else {
                price = num * 15.60;
                console.log(`Total price: ${price.toFixed(2)}`);
            }
        }
        else {
            if (num >= 10 && num <= 20) {
                price = (num * 20) * 0.95;
                console.log(`Total price: ${price.toFixed(2)}`);
            }
            else {
                price = num * 20;
                console.log(`Total price: ${price.toFixed(2)}`);
            }
        }
    }
    else {
        if (type == 'Students') {
            if (num >= 30) {
                price = (num * 10.46) * 0.85;
                console.log(`Total price: ${price.toFixed(2)}`);
            }
            else {
                price = num * 10.46;
                console.log(`Total price: ${price.toFixed(2)}`);
            }
        }
        else if (type == 'Business') {
            if (num >= 100) {
                price = (num - 10) * 16;
                console.log(`Total price: ${price.toFixed(2)}`);
            }
            else {
                price = num * 16;
                console.log(`Total price: ${price.toFixed(2)}`);
            }
        }
        else {
            if (num >= 10 && num <= 20) {
                price = (num * 22.50) * 0.95;
                console.log(`Total price: ${price.toFixed(2)}`);
            }
            else {
                price = num * 22.50;
                console.log(`Total price: ${price.toFixed(2)}`);
            }
        }
    }
}

vacation(40,

    "Regular",
    
    "Saturday")