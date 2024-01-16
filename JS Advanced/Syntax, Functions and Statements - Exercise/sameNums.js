function sameNums(num) {

    let numToStr = String(num);

    let check = Number(numToStr[0]);
    let tOrF = true;
    let sum = 0;

    for (let i = 0; i < numToStr.length; i++) {
        let current = Number(numToStr[i]);
        sum += current;
        if (check !== current) {
            tOrF = false;
        }
        check = current;
    }
    console.log(tOrF);
    console.log(sum);
}

sameNums(2222222)