function cookingByNumbers(numAsStr, op1, op2, op3, op4, op5,) {


    function operation(numAsStr, str) {

        let num = Number(numAsStr);
        switch (str) {
            case 'chop': num /= 2;
                break;
            case 'dice': num = Math.sqrt(num);
                break;
            case 'spice': num++;
                break;
            case 'bake': num *= 3;
                break;
            case 'fillet': num *= 0.80;
                break;
        }
        return num;
    }
    console.log(operation(numAsStr, op1));
    let result = operation(numAsStr, op1);
    console.log(operation(result, op2));
    result = operation(result, op2);
    console.log(operation(result, op3));
    result = operation(result, op3);
    console.log(operation(result, op4));
    result = operation(result, op4);
    console.log(operation(result, op5));

}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')