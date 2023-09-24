function worldSwimmingRecord(input) {

    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSecondsForOneMeter = Number(input[2]);

    let waterResist = Math.floor(distanceInMeters / 15) * 12.5;
    let timeOverAll = (timeInSecondsForOneMeter * distanceInMeters) + waterResist;

    if (timeOverAll < recordInSeconds){
        console.log(`Yes, he succeeded! The new world record is ${(timeOverAll).toFixed(2)} seconds.`);
    }

    else {
        console.log(`No, he failed! He was ${(timeOverAll - recordInSeconds).toFixed(2)} seconds slower.`);
    }






}

worldSwimmingRecord(["10464","1500","20"]);