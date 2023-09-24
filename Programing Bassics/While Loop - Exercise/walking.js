function walking(input) {

    let index = 0;

    let steps = Number(input[index]);
    let overallSteps = 0;
    let goal = 10000;
    let command = "";

    while (overallSteps < goal) {
        command = input[index];
        if (command === "Going home") {
            index++;
            steps = Number(input[index]);
            overallSteps += steps;
            if (overallSteps < goal) {
                console.log(`${goal - overallSteps} more steps to reach goal.`);
                break;
            }
            else {
                console.log(`Goal reached! Good job!`);
                console.log(`${overallSteps - goal} steps over the goal!`);
                break;
            }
        }
        steps = Number(input[index]);
        overallSteps += steps;
        index++;
        if (overallSteps >= goal) {
            console.log(`Goal reached! Good job!`);
            console.log(`${overallSteps - goal} steps over the goal!`);
            break;
        }
    }

}
walking(["1500", "3000", "250", "1548", "2000", "2000"]);