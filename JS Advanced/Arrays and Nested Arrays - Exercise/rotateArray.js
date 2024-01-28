function rotateArray(arr, rotate) {

    let result = arr;

    for (let i = 0; i < rotate; i++) {
        let getEl = result.pop();
        result.unshift(getEl);
    }
    console.log(result.join(' '));
}

rotateArray(['1',

    '2',

    '3',

    '4'],

    2)