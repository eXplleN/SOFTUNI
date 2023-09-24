function time15Minutes(input){

  let hour = Number(input[0]);
  let minutes = Number(input[1]) + 15;
  
      if (minutes >= 60){
        hour = (hour + 1) % 24;
      minutes = minutes - 60;
      }
    if (minutes < 10){
      minutes = "0" + minutes;
    } 
    console.log(`${hour}:${minutes}`);

}

time15Minutes(["23","59"])