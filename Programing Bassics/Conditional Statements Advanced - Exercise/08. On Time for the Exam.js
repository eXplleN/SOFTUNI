function onTimeForTheExam(input){

    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let studentHour = Number(input[2]);
    let studentMinutes = Number(input[3]);

    let examOverall = (examHour * 60) + examMinutes;
    let studentOverall = (studentHour * 60) + studentMinutes;
    let difference = Math.abs(examOverall - studentOverall);
    let hourDifference = Math.floor(difference / 60);
    let minutesDifference = difference % 60;
   
    if (examOverall >= studentOverall){

         if (difference == 0){

            console.log(`On time`);
        }

       else if (difference > 0 && difference <= 30){

            console.log(`On time`);
            console.log(`${difference} minutes before the start`);
        }
        
        else {
            
            console.log(`Early`);

            if (difference >= 60){
                
                if (minutesDifference < 10){

                    minutesDifference = "0" + minutesDifference;
                }

                console.log(`${hourDifference}:${minutesDifference} hours before the start`);

            }

            else {

                console.log(`${difference} minutes before the start`);
            }
        }
    }

    else {

        console.log(`Late`);

        if (difference < 60) {

             console.log(`${difference} minutes after the start`);

        }

        else {

            if (minutesDifference < 10){

                minutesDifference = "0" + minutesDifference;
            }

                console.log(`${hourDifference}:${minutesDifference} hours after the start`);
        }
    }
       
    
}

onTimeForTheExam(["23", "59", "0", "00"])