function oddOccurrences(str) {

    let arr = str.toLowerCase().split(' ');

    let obj = {};

    for (let word of arr) {
        if (word in obj) {
            obj[word] += 1;
        }
        else {
            obj[word] = 1;
        }
    }

    let entries = Object.entries(obj);

    let sorted = [];

    for (let [key, value] of entries) {
        if (value % 2 !== 0) {
            sorted.push([key]);
        }
    }
    console.log(sorted.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')