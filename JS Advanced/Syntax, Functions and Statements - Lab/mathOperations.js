function mathOperations(num1, num2, str) {

    let result;

    switch (str) {
        case '+': result = num1 + num2;
            break;
        case '-': result = num1 - num2;
            break;
        case '*': result = num1 * num2;
            break;
        case '/': result = num1 / num2;
            break;
        case '%': result = num1 % num2;
            break;
        case '**': result = num1 ** num2;
            break;
    }

    console.log(result);

}

mathOperations(5, 6, '+')