function depositCalculator(input) {
       let deposit = Number(input[0]);
       let months = Number(input[1]);
       let increase = Number(input[2]) / 100;
       let overall = deposit + months * ((deposit * increase) / 12);
       console.log(overall);

}

depositCalculator(["200", "3", "5.7"]);