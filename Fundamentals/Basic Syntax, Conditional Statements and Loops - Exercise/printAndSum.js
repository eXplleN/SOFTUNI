function printAndSum(num, num2) {

    let sum = 0;
    let a =``;

    for (let i = num; i <= num2; i++) {
        sum += i;
        a += ` ${i}`;
    }
    console.log(a);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10)
printAndSum(0, 26)
printAndSum(50, 60)