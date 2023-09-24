function tennisRanklist(input){

    let playedTournaments = Number(input[0]);
    let startingPoints = Number(input[1]);
    let winPoints = 0;
    let wins = 0;

    for (let i = 2; i < input.length; i++){

        let currentPosition = input[i];

        switch (currentPosition){

            case "W" : winPoints += 2000; wins++ ; break;
            case "F" : winPoints += 1200; break;
            case "SF" : winPoints += 720; break;
        }

    }

    let averagePoints = winPoints / playedTournaments;

    console.log(`Final points: ${startingPoints + winPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${(wins / playedTournaments * 100).toFixed(2)}%`);

}
tennisRanklist(["5","1400","F","SF","W","W","SF"]);