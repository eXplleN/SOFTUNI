function softUniBarIncome(arr) {

    let totalSum = 0;
    let pattern = /^\%(?<customer>[A-Z][a-z]+)\%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+\.?\d*)\$$/;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'end of shift') {
            break;
        }

        let match = pattern.exec(arr[i]);

        if (match) {
            let [, client, product, count, price] = match;
            sum = Number(count) * Number(price || 1);
            totalSum += sum;
            console.log(`${client}: ${product} - ${sum.toFixed(2)}`);
        }
    }
    console.log(`Total income: ${totalSum.toFixed(2)}`);
}

softUniBarIncome(['%George%<Croissant>|2|10.3$',

    '%Peter%<Gum>|1|1.3$',

    '%Maria%<Cola>|1|2.4$',

    'end of shift'])