function substitute(input) {

    let k = Number(input[0]);
    let l = Number(input[1]);
    let m = Number(input[2]);
    let n = Number(input[3]);

    let num1 = "";
    let num2 = "";

    for (let a = k; a <= 8; a++) {
        let summa = "";
        if (a % 2 === 0) {
            summa += `${a}`;
        }
        for (let b = l; b <= 9; b++) {
            let summb = "";
            if (b % 2 !== 0) {
                summb += `${b} `;
            }
            for (let c = m; c <= 8; c++) {
                let summc = "";
                if (c % 2 === 0) {
                    summc += `${c}`;
                }
                for (let d = n; d <= 9; d++) {
                    let summd = "";
                    if (d % 2 !== 0) {
                        summd += `${d} `
                    }
                    num1 = `${summa}` + `${summb}`;
                    num2 = `${summc}` + `${summd}`;
                }
            }
        }
    }
    if (num1 === num2) {
        console.log(`Cannot change the same player.`);
    }
    else {
        console.log(`${num1} - ${num2}`);
    }


}

substitute(["7", "6", "8", "5"]);