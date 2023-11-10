function wordOccurrences(arr) {

    let obj = {};

    for (let word of arr) {
        if (word in obj) {
            obj[word] += 1;
        }
        else {
            obj[word] = 1;
        }
    }

    let sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);

    for (let [word, value] of sorted) {
        console.log(`${word} -> ${value} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])