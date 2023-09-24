function summerOutfit(input){

    let degrees = Number(input[0]);
    let dayTime = input[1];

    if (degrees >= 10 && degrees <= 18){
        if (dayTime == "Morning"){
            let outfit = "Sweatshirt";
            let shoes = "Sneakers";
          console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
        }
        else if (dayTime == "Afternoon"){
            let outfit = "Shirt";
            let shoes = "Moccasins";
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
        }
        else {
            let outfit = "Shirt";
            let shoes = "Moccasins";
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
        }
    }
    else if (degrees > 18 && degrees <= 24){
        if (dayTime == "Morning"){
            let outfit = "Shirt";
            let shoes = "Moccasins";
          console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
        }
        else if (dayTime == "Afternoon"){
            let outfit = "T-Shirt";
            let shoes = "Sandals";
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
        }
        else {
            let outfit = "Shirt";
            let shoes = "Moccasins";
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
        }
    }
    else {
        if (dayTime == "Morning"){
            let outfit = "T-Shirt";
            let shoes = "Sandals";
          console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
        }
        else if (dayTime == "Afternoon"){
            let outfit = "Swim Suit";
            let shoes = "Barefoot";
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
        }
        else {
            let outfit = "Shirt";
            let shoes = "Moccasins";
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
        }
    }

}

summerOutfit(["16","Morning"])