function arrayManipulations(input) {

    let arr = input.shift().split(' ').map(Number);

    for (let i = 0; i < input.length; i++) {
        let [command, firstNumber, secondNumber] = input[i].split(' ');

        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);

        switch (command) {
            case 'Add': add(firstNumber);
                break;
            case 'Remove': remove(firstNumber);
                break;
            case 'RemoveAt': removeAt(firstNumber);
                break;
            case 'Insert': insert(firstNumber, secondNumber);
                break;
        }
    }
    console.log(arr.join(' '));

    function add(num) {
        arr.push(num);
    }

    function remove(num) {
        arr = arr.filter(el => el !== num);
    }

    function removeAt(index) {
        arr.splice(index, 1);
    }

    function insert(num, index) {
        arr.splice(index, 0, num);
    }
}

arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'])
arrayManipulations(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2'])