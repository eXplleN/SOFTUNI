function towns(arr) {

    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i].split(' | ');
        obj.town = current[0];
        obj.latitude = Number(current[1]).toFixed(2);
        obj.longitude = Number(current[2]).toFixed(2);
        console.log(obj);
        obj = {};
    }
}

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])