function bestPlayer(input) {

    let index = 0;
    let player = input[index];

    let playerName = "";
    let goals = 0;
    let currentGoals = 0;
    let headtrick = 0;

    while (player !== "END") {
        player = input[index];
        index++;
        let playergoals = Number(input[index]);
        goals += playergoals;
        if (playergoals > currentGoals) {
            playerName = player;
            currentGoals = playergoals;
            goals = 0;
        }
        if (playergoals >= 10) {
            break;
        }
        index++;
        player = input[index];
    }
    if (currentGoals >= 3) {
        console.log(`${playerName} is the best player!`);
        console.log(`He has scored ${currentGoals} goals and made a hat-trick !!!`);
    }
    else {
        console.log(`${playerName} is the best player!`);
        console.log(`He has scored ${currentGoals} goals.`);
    }
}

bestPlayer(["Petrov",
    "2",
    "Drogba",
    "11"]);