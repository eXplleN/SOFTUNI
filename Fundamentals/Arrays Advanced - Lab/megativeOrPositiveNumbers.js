function megativeOrPositiveNumbers(arr) {

    let result = [];

    for ( let element of arr) {
        if (element < 0) {
            result.unshift(element);
        }
        else {
        result.push(element);
        }
    }

    console.log(result.join('\n'));
}

megativeOrPositiveNumbers(['7', '-2', '8', '9'])
//megativeOrPositiveNumbers(['3', '-2', '0', '-1'])