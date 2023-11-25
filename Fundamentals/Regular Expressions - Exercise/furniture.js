function furniture(arr) {

    let totalSum = 0;
    let furnitureList = [];
    let pattern = new RegExp(">>(?<furniture>[\\w]+)<<(?<price>[\\d]+[.]?[\\d]+)!(?<quantity>[\\d]+)");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'Purchase') {
            break;
        }

        let match = pattern.exec(arr[i]);

        if (match) {
            let [, furnitureName, price, quantity] = match;
            furnitureList.push(furnitureName);
            totalSum += Number(price) * Number(quantity);
        }
    }
    if (furnitureList.length == 0) {
        console.log(`Bought furniture:`);
        console.log(`Total money spend: ${totalSum.toFixed(2)}`);
    }
    else {
        console.log(`Bought furniture:`);
        for (let item of furnitureList) {
            console.log(item);
        }
        console.log(`Total money spend: ${totalSum.toFixed(2)}`);
    }
}

furniture(['>>Sofa<<312.23!3',

    '>>TV<<300!5',

    '>Invalid<<!5',

    'Purchase'])