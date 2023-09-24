function trainTheTrainers(input) {

    let index = 0;
    let juryNumber = Number(input[index]);
    index++;
    let command = input[index];
    let voteCounter = 0;
    let voteSum = 0;
    let presentationCounter = 0;
    let allVote = 0;

    while (command !== "Finish") {
        for (let i = 2; i < input.length; i++) {
            index++;
            let vote = Number(input[index]);
            voteCounter++;
            voteSum += vote;
            if (voteCounter >= juryNumber) {
                console.log(`${command} - ${(voteSum / juryNumber).toFixed(2)}.`);
                presentationCounter++;
                allVote += voteSum;
                voteSum = 0;
                voteCounter = 0;
                break;
            }
        }
        index++;
        command = input[index];
    }
    console.log(`Student's final assessment is ${(allVote / (juryNumber * presentationCounter)).toFixed(2)}.`);


}
trainTheTrainers(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"]);