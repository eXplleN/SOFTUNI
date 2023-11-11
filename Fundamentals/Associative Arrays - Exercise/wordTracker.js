function wordTracker(arr) {

    let wordCount = {};
    let searchedWords = arr.shift().split(' ');

    for (let el of searchedWords) {
        let word = el;
        wordCount[word] = 0;
    }

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        if (word in wordCount) {
            wordCount[word] += 1;
        }
        else {
            continue;
        }
    }

    let sorted = Object.entries(wordCount).sort((a, b) => b[1] - a[1]);

    for (let [key, value] of sorted) {
        console.log(`${key} - ${value}`);
    }
}

wordTracker([

    'this sentence',

    'In', 'this', 'sentence', 'you', 'have',

    'to', 'count', 'the', 'occurrences', 'of',

    'the', 'words', 'this', 'and', 'sentence',

    'because', 'this', 'is', 'your', 'task'

])