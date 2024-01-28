function evenPositionElements(arr) {

    let even = [];

    for (i = 0; i < arr.length; i += 2) {
        even.push(arr[i]);
    }
    console.log(even.join(' '));

}

evenPositionElements(['20', '30', '40', '50', '60'])