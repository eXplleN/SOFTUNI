function suppliesForSchool(input) {

       let pens = Number(input[0]) * 5.80;
       let markers = Number(input[1]) * 7.20;
       let liters = Number(input[2]) * 1.20;
       let discount = Number(input[3]) / 100;

       let overall = (pens + markers + liters) * discount;
       let cash = (pens + markers + liters) - overall;
       
       console.log(cash);


}

suppliesForSchool(["2","3","4","25"]);