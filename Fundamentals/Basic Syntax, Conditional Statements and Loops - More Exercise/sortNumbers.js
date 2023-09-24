function sortNumbers(num1, num2, num3) {

    let biggest = 0;
    let mid = 0;
    let smallest = 0;

    if (num1 >= num2 && num1 >= num3 && num2 >= num3) {
        biggest = num1;
        mid = num2;
        smallest = num3;
    }
    else if (num2 >= num1 && num2 >= num3 & num1 >= num3) {
        biggest = num2;
        mid = num1;
        smallest = num3;
    }
    else if (num3 >= num1 && num3 >= num2 && num1 >= num2) {
        biggest = num3;
        mid = num1;
        smallest = num2;
    }

    console.log(biggest);
    console.log(mid);
    console.log(smallest);
}

sortNumbers(-2, 1, 3)