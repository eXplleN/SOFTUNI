function cinemaTicket(input){

    let day = input[0];

    switch (day){
        case "Monday" : 
        case "Friday" :
        case "Tuesday" : console.log("12"); break;
        case "Wednesday" : 
        case "Thursday" : console.log("14"); break;
        default : console.log("16"); break;

    }


}

cinemaTicket(["Monday"])