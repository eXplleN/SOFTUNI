function coffeeLover(arr) {

    let coffeeList = arr.shift().split(' ');
    let numberOfCommands = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {
        let currentStep = arr[i].split(' ');
        let command = currentStep.shift();

        if (command == 'Include') {
            let coffee = currentStep[0];
            coffeeList.push(coffee);
        }
        else if (command == 'Remove') {
            let firstOrLast = currentStep[0];
            let num = Number(currentStep[1]);

            if (num > coffeeList.length) {
                continue;
            }
            if (firstOrLast == 'first') {
                coffeeList.splice(0, num);
            }
            else {
                coffeeList.splice(- num);
            }
        }
        else if (command == 'Prefer') {
            let index1 = Number(currentStep[0]);
            let index2 = Number(currentStep[1]);

            if (index1 <= coffeeList.length && index1 >= 0 && index2 <= coffeeList.length && index2 >= 0) {
                let temp = coffeeList[index1];
                coffeeList[index1] = coffeeList[index2];
                coffeeList[index2] = temp;
            }
        }
        else {
            coffeeList.reverse();
        }
    }
    console.log(`Coffees:
${coffeeList.join(' ')}`);
}

//coffeeLover(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee", "5", "Include TurkishCoffee", "Remove first 2", "Remove last 1", "Prefer 3 1", "Reverse"])
coffeeLover(["Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica", "3", "Include OrdinaryCoffee", "Remove first 1", "Prefer 4 1"]) 
