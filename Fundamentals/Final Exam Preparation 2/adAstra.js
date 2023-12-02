function adAstra(arr) {

    let text = arr[0];
    let pattern = /([#|\|])(?<item>[A-Za-z ]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]{1,4}|[10000])\1/g;
    let matched = text.match(pattern);
    let allCalories = 0;

    if (matched != null) {
        for (let i = 0; i < matched.length; i++) {
            let tokens = matched[i].split(matched[i][0]);
            let calories = Number(tokens[3]);
            allCalories += Number(calories);
        }
    }
    console.log(`You have food to last you for: ${Math.trunc(allCalories / 2000)} days!`);

    if (matched != null) {
        for (let product of matched) {
            let item = product.split(product[0]);
            console.log(`Item: ${item[1]}, Best before: ${item[2]}, Nutrition: ${Number(item[3])}`);
        }
    }
}

adAstra(

    ['$$#@@%^&Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!Ice Cream#03/10/21#9000#^#@asweMilk|05/09/20|2000|']

)