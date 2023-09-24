function cake(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);

    let cake = width * length;
    let guestsPices = 0;
    let command = "";

    let index = 2;

    while (true) {
        command = input[index];
        if (command === "STOP") {          
                console.log(`${cake} pieces are left.`);
                break;
            }
  
        guestsPices = Number(input[index]);
        index++;
        cake -= guestsPices;
        if (cake <=0){
            console.log(`No more cake left! You need ${Math.abs(cake)} pieces more.`);
            break;
        }

    }
    

}
cake(["10", "2", "2", "4", "6", "STOP"]);