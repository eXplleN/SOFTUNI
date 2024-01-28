function townsToJSON(arr) {

    let newArr = [];

    for (let el of arr) {
        let current = el.split('|');
        let one = current[1].trim();
        let two = current[2].trim();
        let tree = current[3].trim();
        let trimedArr = [one, two, tree];
        newArr.push(trimedArr);
    }

    let keys = newArr.shift();

    let result = [];

    for (let city of newArr) {
        let [town, latitude, longitude] = city;
        let obj = {};
        obj[keys[0]] = town;
        obj[keys[1]] = Number(Number(latitude).toFixed(2));
        obj[keys[2]] = Number(Number(longitude).toFixed(2));
        result.push(obj);
    }
    console.log(JSON.stringify(result));
}

townsToJSON(['| Town | Latitude | Longitude |',

    '| Sofia | 42.696552 | 23.32601 |',

    '| Beijing | 39.913818 | 116.363625 |'])