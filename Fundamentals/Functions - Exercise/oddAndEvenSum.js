function oddAndEvenSum(num) {

    let arr = [];
    let str = String(num);

    for (let i = 0; i < str.length; i++) {
        arr.push(str[i]);
    }

    function oddSum(arr) {
        let sumOdd = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 != 0) {
                sumOdd += Number(arr[i]);
            }
        }
        return sumOdd;
    }

    function evenSum(arr) {
        let sumEven = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 0) {
                sumEven += Number(arr[i]);
            }
        }
        return sumEven;
    }
    console.log(`Odd sum = ${oddSum(arr)}, Even sum = ${evenSum(arr)}`);
}

oddAndEvenSum(1000435)
oddAndEvenSum(3495892137259234)