function searchForANumber(input, commands) {

    let numsToTake = commands[0];
    let numsToDelete = commands[1];
    let searchedNum = commands[2];

    let taken = input.splice(0, numsToTake);

    for (let i = 0; i < numsToDelete; i++) {
        taken.shift();
    }

    let count = 0;

    for (let j = 0; j < taken.length; j++) {
        if (taken[j] == searchedNum) {
            count++;
        }
    }
    console.log(`Number ${searchedNum} occurs ${count} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3])
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5])