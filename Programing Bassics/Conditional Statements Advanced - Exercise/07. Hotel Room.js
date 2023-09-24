function hotelRoom(input){

    let month = input[0];
    let nights = Number(input[1]);

    let studio = 0.0;
    let apartment = 0.0;
    let overallStudio = 0.0;
    let overallApartment = 0.0

    if (month == "May" || month == "October"){

        studio = 50;
        apartment = 65;

        if (nights > 7 && nights <= 14){

            studio = studio * nights;
            apartment = apartment;
            overallStudio = studio * 0.95;
            overallApartment = apartment * nights;
        }
        
        else if (nights > 14){
            
            studio = studio * nights;
            apartment = apartment * nights;
            overallStudio = studio * 0.70;
            overallApartment = apartment * 0.90;
        }

        else {

            studio = studio;
            apartment = apartment;
            overallApartment = apartment * nights;
            overallStudio = studio * nights;
        }
    }

    else if (month == "June" || month == "September"){

        studio = 75.20;
        apartment = 68.70;

        if (nights > 14){

            studio = studio * nights;
            apartment = apartment * nights;
            overallStudio = studio * 0.80;
            overallApartment = apartment * 0.90;
        }

        else {
            
            studio = studio;
            apartment = apartment;
            overallStudio = studio * nights;
            overallApartment = apartment * nights;
        }
    }

    else {

        studio = 76;
        apartment = 77;

        if (nights > 14){

            studio = studio;
            apartment = apartment * nights;
            overallStudio = studio * nights;
            overallApartment = apartment * 0.90;
        }

        else {

            studio = studio;
            apartment = apartment;
            overallStudio = studio * nights;
            overallApartment = apartment * nights;
        }

    }

           console.log(`Apartment: ${(overallApartment).toFixed(2)} lv.`);
           console.log(`Studio: ${(overallStudio).toFixed(2)} lv.`);





}

hotelRoom(["May","15"]);