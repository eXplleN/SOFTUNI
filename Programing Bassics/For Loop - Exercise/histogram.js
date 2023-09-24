function histogram(input){

    let n = Number(input[0]);
    let percent1 = 0;
    let percent2 = 0;
    let percent3 = 0;
    let percent4 = 0;
    let percent5 = 0;
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    let sum4 = 0;
    let sum5 = 0;
    
    for (let i = 1; i <= n; i++){
        let currentNumber = Number(input[i]);
        
        if (currentNumber < 200){

            sum1 += 1;
           percent1 = sum1 / n * 100;
        }

        else if (currentNumber >= 200 && currentNumber < 400){

            sum2 += 1;
            percent2 = sum2 / n * 100;

        }

        else if (currentNumber >= 400 && currentNumber < 600){

            sum3 += 1;
            percent3 = sum3 / n * 100;

        }

        else if (currentNumber >= 600 && currentNumber < 800){

            sum4 += 1;
            percent4 = sum4 / n * 100;

        }

        else {

            sum5 += 1;
            percent5 = sum5 / n * 100;

        }
        
    }
    console.log(`${percent1.toFixed(2)}%\n ${percent2.toFixed(2)}%\n ${percent3.toFixed(2)}%\n ${percent4.toFixed(2)}%\n ${percent5.toFixed(2)}%`);


}

histogram(["3","1","2","999"]);