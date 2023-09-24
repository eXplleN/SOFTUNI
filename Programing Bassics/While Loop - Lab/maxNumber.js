function maxNumber(input){

    let index = 0;
    let myMaxNum = Number.MIN_SAFE_INTEGER;

    let command = input[index];
    index++;

    while ( command !== "Stop"){
        let num = Number(command);

        if(myMaxNum < num){
            myMaxNum = num;
        }

        command = input[index];
        index++;
    }
    console.log(myMaxNum);


}
maxNumber(["100","99","80","70","Stop"]);