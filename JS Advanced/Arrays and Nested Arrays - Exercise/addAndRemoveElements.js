function addAndRemoveElements(arr) {

    let result = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];

        if (command === 'add') {
            sum++
            result.push(sum);
        }
        else {
            sum++
            result.pop();
        }
    }

    if (result.length === 0) {
        console.log(`Empty`);
    }
    else {
        for (el of result) {
            console.log(el);
        }
    }
}

addAndRemoveElements(['add',

    'add',

    'add',

    'add'])