function solution() {

    let recepies = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    let storage = {
        carbohydrate: 0,
        flavour: 0,
        fat: 0,
        protein: 0
    }

    function cook(str) {
        let input = str.split(" ");
        let command = input[0];
        let recepieOrStore = input[1];
        let qty = Number(input[2]);

        switch (command) {
            case "restock":
                storage[recepieOrStore] += qty;
                return "Success";

            case "prepare":
                let recepi = recepies[recepieOrStore];
                let recepiArr = Object.entries(recepi);

                for (let el of recepiArr) {
                    let [ingridiant, value] = el;
                    let totalQty = value * qty;
                    if (storage[ingridiant] < totalQty) {
                        return `Error: not enough ${ingridiant} in stock`;
                    }
                }
                for (let ing of recepiArr) {
                    let [ingridiant, value] = ing;
                    let totalQty = value * qty;
                    storage[ingridiant] -= totalQty;
                }
                return "Success";


            case "report":
                return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`
        }
    }
    return cook;
}

let manager = solution();

console.log(manager("prepare turkey 1")); 

console.log(manager ("restock protein 10")); 
console.log(manager ("prepare turkey 1")); 
console.log(manager ("restock carbohydrate 10")); 
console.log(manager ("prepare turkey 1")); 
console.log(manager ("restock fat 10")); 
console.log(manager ("prepare turkey 1")); 
console.log(manager ("restock flavour 10")); 
console.log(manager ("prepare turkey 1")); 
console.log(manager ("report")); 