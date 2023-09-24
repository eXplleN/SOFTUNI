function multiplicationTable(input){

    let num = Number(input[0]);

    for (let i = 1; i <= 10; i++){
        summ = [i] * num;
        console.log(`${[i]} * ${num} = ${summ}`);
    
    }

}
multiplicationTable(["5"])