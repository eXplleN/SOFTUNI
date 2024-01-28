function sortAnArrayBy2Criteria(arr) {

    let sorted = arr;

    let sortBy2Criteria = (a, b) => {
        if (a.length < b.length) {
            return -1;
        }
        else if (a.length > b.length) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        else if (a > b) {
            return 1;
        }
        return 0;
    }

    sorted.sort(sortBy2Criteria);

    for (el of sorted) {
        console.log(el);
    }
}

sortAnArrayBy2Criteria(['alpha',

    'beta',

    'gamma'])