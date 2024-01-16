function timeToWalk(steps, foot, speed) {

    let numberOfRests = Math.floor(steps / (500 / foot));
    let totalTimeInHours = (steps * foot) / (speed * 1000) + (numberOfRests / 60);

    let totalTimeInSeconds = totalTimeInHours * 3600;
    let hours = Math.floor(totalTimeInSeconds / 3600);
    let minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
    let seconds = Math.floor(totalTimeInSeconds % 60) + 1;

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    console.log(`${hours}:${minutes}:${seconds}`);

}

timeToWalk(2564, 0.70, 5.5)