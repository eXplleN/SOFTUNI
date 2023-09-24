function examPreparation(input) {

    let index = 1;
    
    let badGrades = Number(input[0]);

    let problemName = input[index];
    index++;
    let grade = Number(input[index]);
    
    let gradesum = 0;
    let poorGrades = 0;
    let problemOverall = 0;
    let lastProblemName = "";

    while (poorGrades < badGrades) {

        if (problemName === "Enough") {
            console.log(`Average score: ${(gradesum / problemOverall).toFixed(2)}`);
            console.log(`Number of problems: ${problemOverall}`);
            console.log(`Last problem: ${lastProblemName}`);
            break;
        }
        if (grade <= 4) {
            poorGrades++;
            if (poorGrades === badGrades) {
                console.log(`You need a break, ${badGrades} poor grades.`);
                break;
            }
        }
        problemOverall++;
        gradesum += grade;
        lastProblemName = problemName;
        index++;
        problemName = input[index];
        index++;
        grade = Number(input[index]);
       

    }


}
examPreparation(["3","Money","6","Story","4","SpringTime","5","Bus","6","Enough"]);