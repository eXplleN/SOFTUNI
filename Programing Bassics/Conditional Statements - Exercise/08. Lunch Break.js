function lunchBreak(input){

      let tvShow = input[0];
      let episodeTime = Number(input[1]);
      let brakeTime = Number(input[2]);

      let lunchTime = brakeTime / 8;
      let freeTime = brakeTime / 4;
      let totalTime = lunchTime + freeTime;
      let timeLeftForEpisode = brakeTime - totalTime;

      if (timeLeftForEpisode >= episodeTime){
        console.log(` You have enough time to watch ${tvShow} and left with ${Math.ceil(timeLeftForEpisode - episodeTime)} minutes free time. `);
      }

      else {
        console.log(` You don't have enough time to watch ${(tvShow)}, you need ${Math.ceil(episodeTime - timeLeftForEpisode)} more minutes. `);
      }



}

lunchBreak(["Teen Wolf","48","60"])