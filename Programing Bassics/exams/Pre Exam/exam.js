function exam(input) {

    let students = Number(input[0]);

    let grade = 0;

    let between2And3 = 0;
    let between3And4 = 0;
    let between4And5 = 0;
    let between5And6 = 0;

    let gradeSumm = 0;

    for (let i = 1; i < input.length; i++) {
        grade = Number(input[i]);
        if (grade <= 2.99) {
            between2And3++;
            gradeSumm += grade;
        }
        else if (grade <= 3.99) {
            between3And4++;
            gradeSumm += grade;
        }
        else if (grade <= 4.99) {
            between4And5++;
            gradeSumm += grade;
        }
        else {
            between5And6++;
            gradeSumm += grade;
        }
    }

    let sredenUspehNaIzpita = gradeSumm / students;
    let srednoBetween2And3 = between2And3 / students * 100;
    let srednoBetween3And4 = between3And4 / students * 100;
    let srednoBetween4And5 = between4And5 / students * 100;
    let srednoBetween5And6 = between5And6 / students * 100;

    console.log(`Top students: ${srednoBetween5And6.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${srednoBetween4And5.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${srednoBetween3And4.toFixed(2)}%`);
    console.log(`Fail: ${srednoBetween2And3.toFixed(2)}%`);
    console.log(`Average: ${sredenUspehNaIzpita.toFixed(2)}`);

}

exam(["6",
"2",
"3",
"4",
"5",
"6",
"2.2"])