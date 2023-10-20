function numbers(str) {

    let nums = str.split(' ').map(Number);
    let sumNumbers = 0;

    for (let i = 0; i < nums.length; i++) {
        sumNumbers += nums[i];
    }

    let average = sumNumbers / nums.length;

    let averageNumbers = [];

    for (let bigger of nums) {
        if (bigger > average) {
            averageNumbers.push(bigger);
        }
    }

    let sorted = averageNumbers.sort((a, b) => b - a)

    sorted.splice(5);

    if (averageNumbers == 0) {
        console.log(`No`);
    }
    else {
        console.log(sorted.join(' '));
    }
}

//numbers('10 20 30 40 50')
//numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
numbers('2 2')
//numbers('-1 -2 -3 -4 -5 -6')