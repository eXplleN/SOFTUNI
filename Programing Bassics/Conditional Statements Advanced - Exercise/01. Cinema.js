function cinema(input){

    let type = input[0];
    let row = Number(input[1]);
    let columns = Number(input[2]);

    let seats = row * columns;
    let leva = "leva" 

    switch (type){
        case "Premiere" : console.log(` ${((seats * 12).toFixed(2))} ${leva} `); break;
        case "Normal" : console.log(` ${((seats * 7.50).toFixed(2))} ${leva} `); break;
        default : console.log(` ${((seats * 5).toFixed(2))} ${leva} `); break;
    }
    


}

cinema(["Premiere","10","12"])