function skiTrip(input){

    let days = Number(input[0]);
    let room = input[1];
    let evaluation = input[2];

    let nights = days - 1;
    let totalPrice = 0.0

    if (room == "room for one person"){
        
        totalPrice = nights * 18;

        if (evaluation == "positive"){

            totalPrice = totalPrice * 1.25;
        }
        else {

            totalPrice = totalPrice * 0.90;
        }
    }

    else if (room == "apartment"){

        totalPrice = nights * 25;

        if (days < 10){

            totalPrice = totalPrice * 0.70

        }

        else if (days >=10 && days <= 15){

            totalPrice = totalPrice * 0.65;

        }

        else {

            totalPrice = totalPrice * 0.50;
        }

        if (evaluation == "positive"){

            totalPrice = totalPrice * 1.25;
        }
        
        else {

            totalPrice = totalPrice * 0.90;
        }

    }

    else {

        totalPrice = nights * 35;

        if (days < 10){

            totalPrice = totalPrice * 0.90;

        }

        else if (days >= 10 && days <=15){

            totalPrice = totalPrice * 0.85;

        }

        else {

            totalPrice = totalPrice * 0.80;
        }

        if (evaluation == "positive"){

            totalPrice = totalPrice * 1.25;
        }
        
        else {

            totalPrice = totalPrice * 0.90;
        }

    }

    console.log((totalPrice).toFixed(2));


}

skiTrip(["12", "room for one person", "negative"])