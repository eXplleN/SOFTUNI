function simpleCalculator(numOne, numTwo, operator) {

    switch (operator) {
        case 'multiply': result = (numOne, numTwo) => numOne * numTwo;
            console.log(result(numOne, numTwo));
            break;
        case 'divide': result = (numOne, numTwo) => numOne / numTwo;
            console.log(result(numOne, numTwo));
            break;
        case 'add': result = (numOne, numTwo) => numOne + numTwo;
            console.log(result(numOne, numTwo));
            break;
        case 'subtract': result = (numOne, numTwo) => numOne - numTwo;
            console.log(result(numOne, numTwo));
            break;
    }
}

simpleCalculator(5, 5, 'multiply')
simpleCalculator(40, 8, 'divide')
simpleCalculator(12, 19, 'add')
simpleCalculator(50, 13, 'subtract')