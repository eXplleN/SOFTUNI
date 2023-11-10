function schoolGrades(arr) {

    let studentGrades = {};

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i].split(' ');
        let student = current.shift();
        let grades = current;

        if (student in studentGrades) {
            studentGrades[student] = studentGrades[student].concat(grades);
        }
        else {
            studentGrades[student] = grades;
        }
    }
    let finalGrades = {};

    for (let [key, value] of Object.entries(studentGrades)) {
        let sum = 0;
        for (let num of value) {
            let currentGrade = Number(num);
            sum += currentGrade
        }
        let finalGr = sum / value.length;
        finalGrades[key] = finalGr;
    }

    let sorted = Object.entries(finalGrades).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [student, grade] of sorted) {
        console.log(`${student}: ${(grade).toFixed(2)}`);
    }
}

schoolGrades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6'])