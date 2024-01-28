function listOfNames(arr) {

    let sorted = arr.sort((a, b) => a.localeCompare(b));
    let count = 1;

    for (let i = 0; i < sorted.length; i++) {
        console.log(`${count}.${sorted[i]}`);
        count++;
    }
}

listOfNames(["John",

    "Bob",

    "Christina",

    "Ema"])