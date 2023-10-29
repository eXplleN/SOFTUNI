function convertToObject(str) {

    let parsed = JSON.parse(str);
    let entries = Object.entries(parsed);

    for (let [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}

convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}')