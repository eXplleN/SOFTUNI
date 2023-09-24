function specialNumbers(input) {

    let n = Number(input[0]);

    let startInterval = 1111;
    let endInterval = 9999;

    let printLine = ``;

    for (let i = startInterval; i <= endInterval; i++) {
        let currentNum = "" + i;
        let printDigit = "";
        for (let j = 0; j <= currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j));
            if (n % currentDigit === 0) {
                printDigit += currentDigit;
            }
            else {
                break;
            }
            if (printDigit === currentNum) {
                printLine += `${i} `;
                break;
            }
        }
    }
    console.log(printLine);
}
specialNumbers(["3"]);