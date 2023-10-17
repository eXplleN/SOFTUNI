function arrayManipulator(arr, str) {

    for (let i = 0; i < str.length; i++) {
        let [command, num1, num2] = str[i].split(' ');

        num1 = Number(num1);
        num2 = Number(num2);

        switch (command) {
            case 'add': arr.splice(num1, 0, num2);
                break;
            case 'addMany': arr.splice(num1, 0, ...addMany(str[i]));
                break;
            case 'contains': console.log(arr.indexOf(num1));
                break;
            case 'remove': arr.splice(num1, 1);
                break;
            case 'shift':
                for (let i = 0; i < num1; i++) {
                    let firstNum = arr.shift();
                    arr.push(firstNum);
                }
                break;
            case 'sumPairs': arr = sumPairs(arr);
                break;
        }

        if (command == 'print') {
            console.log(`[ ${arr.join(', ')} ]`);
        }
    }

    function addMany(arr) {

        let newArr = [];
        newArr = arr.split(' ');

        newArr.shift();
        newArr.shift();

        let result = newArr.map(str => parseInt(str, 10));

        return result;
    }

    function sumPairs(arr) {

        let lastIndex = 0;
        let flag = false;

        if (arr.length % 2 != 0) {
            flag = true;
            lastIndex = arr.pop();
        }
        let result = [];

        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                let sum = arr[i] + arr[j];
                result.push(sum);
                i++;
                break;
            }
        }

        if (flag == true) {
            result.push(lastIndex);
        }

        return result;
    }

}

arrayManipulator([1, 2, 4, 5, 6, 7], ["add 1 8", "contains 1", "contains -3", "print"])
//arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'sumPairs', 'print'])
//arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])