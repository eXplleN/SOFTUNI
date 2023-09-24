function sumSeconds(input) {

       let athlete1 = Number(input[0]);
       let athlete2 = Number(input[1]);
       let athlete3 = Number(input[2]);

       let totalTime = athlete1 + athlete2 + athlete3;
       let minutes = Math.floor(totalTime / 60);
       let seconds = totalTime % 60;

       if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
       }
       else {
        console.log(`${minutes}:${seconds}`);
       }



}

sumSeconds(["35","45","44"]);