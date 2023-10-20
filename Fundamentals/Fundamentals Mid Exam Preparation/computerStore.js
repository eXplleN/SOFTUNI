function computerStore(arr) {

    let client = arr.pop();
    let totalPrice = 0;

    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);
        if (num >= 0) {
            totalPrice += num;
        }
        else {
            console.log(`Invalid price!`);
        }
    }

    if (totalPrice == 0) {
        console.log(`Invalid order!`);
        return;
    }

    let priceWithTaxes = totalPrice * 1.20;
    let taxes = totalPrice * 0.20;

    if (client == 'special') {
        priceWithTaxes *= 0.90;
        console.log(`Congratulations you've just bought a new computer!
        Price without taxes: ${totalPrice.toFixed(2)}$
        Taxes: ${taxes.toFixed(2)}$
        -----------
        Total price: ${priceWithTaxes.toFixed(2)}$`);
    }
    else {
        console.log(`Congratulations you've just bought a new computer!
        Price without taxes: ${totalPrice.toFixed(2)}$
        Taxes: ${taxes.toFixed(2)}$
        -----------
        Total price: ${priceWithTaxes.toFixed(2)}$`);
    }
}

computerStore(['1050', '200', '450', '2', '18.50', '16.86', 'special'])
computerStore(['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular'])
computerStore(['regular'])