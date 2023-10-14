function train(arr) {

    let wagons = arr.shift().split(' ').map(Number);
    let maxWagonCapacity = Number(arr.shift());

        for (let i = 0; i < arr.length; i++) {
            let [command, num] = arr[i].split(' ');
            
            num = Number(num);

            if (command === 'Add') {
                wagons.push(num);
                arr.shift();
            }
            else {
                command = Number(command);
                let searched = maxWagonCapacity - command;
            }
        }



        console.log(wagons);
    
}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75'])
train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6'])
