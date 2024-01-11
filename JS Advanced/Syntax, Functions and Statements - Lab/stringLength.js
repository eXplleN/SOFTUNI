function stringLength(str1, str2, str3) {

    let first = str1.length;
    let second = str2.length;
    let third = str3.length;

    let average = (first + second + third) / 3;
    let sumAll = first + second + third;

    console.log(sumAll);
    console.log(Math.floor(average));

}

stringLength('chocolate', 'ice cream', 'cake')