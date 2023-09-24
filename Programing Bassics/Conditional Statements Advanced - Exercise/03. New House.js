function newHouse(input){

    let kindOfFlower = input[0];
    let numberOfFlower = Number(input[1]);
    let budget = Number(input[2]);

    let roses = numberOfFlower * 5;
    let dahlia = numberOfFlower * 3.80;
    let tulip = numberOfFlower * 2.80;
    let narcissus = numberOfFlower * 3;
    let gladiolus = numberOfFlower * 2.50;
   

     if (kindOfFlower == "Roses"){
      if (numberOfFlower > 80){
         roses = roses * 0.90;
         if (budget >= roses){
            console.log(`Hey, you have a great garden with ${numberOfFlower} ${kindOfFlower} and ${(budget - roses).toFixed(2)} leva left.`);
         }
         else {
            console.log(`Not enough money, you need ${(roses - budget).toFixed(2)} leva more.`);
         }
      }
      else {
         if (budget >= roses){
            console.log(`Hey, you have a great garden with ${numberOfFlower} ${kindOfFlower} and ${(budget - roses).toFixed(2)} leva left.`);
         }
         else {
            console.log(`Not enough money, you need ${(roses - budget).toFixed(2)} leva more.`);
         }
      }
     }

     else if(kindOfFlower == "Dahlias"){
      if (numberOfFlower > 90){
         dahlia = dahlia * 0.85;
         if (budget >= dahlia){
            console.log(`Hey, you have a great garden with ${numberOfFlower} ${kindOfFlower} and ${(budget - dahlia).toFixed(2)} leva left.`);
         }
         else {
            console.log(`Not enough money, you need ${(dahlia - budget).toFixed(2)} leva more.`);
         }
      }
      else {
         if (budget >= dahlia){
            console.log(`Hey, you have a great garden with ${numberOfFlower} ${kindOfFlower} and ${(budget - dahlia).toFixed(2)} leva left.`);
         }
         else {
            console.log(`Not enough money, you need ${(dahlia - budget).toFixed(2)} leva more.`);
         }
      }
     }
   
     else if (kindOfFlower == "Tulips"){
      if (numberOfFlower > 80){
         tulip = tulip * 0.85;
         if (budget >= tulip){
            console.log(`Hey, you have a great garden with ${numberOfFlower} ${kindOfFlower} and ${(budget - tulip).toFixed(2)} leva left.`);
         }
         else {
            console.log(`Not enough money, you need ${(tulip - budget).toFixed(2)} leva more.`);
         }
      }
      else {
         if (budget >= tulip){
            console.log(`Hey, you have a great garden with ${numberOfFlower} ${kindOfFlower} and ${(budget - tulip).toFixed(2)} leva left.`);
         }
         else {
            console.log(`Not enough money, you need ${(tulip - budget).toFixed(2)} leva more.`);
         }
      }
     }

     else if (kindOfFlower == "Narcissus"){
      if (numberOfFlower < 120){
         narcissus = narcissus + (narcissus * 0.15);
         if (budget >= narcissus){
            console.log(`Hey, you have a great garden with ${numberOfFlower} ${kindOfFlower} and ${(budget - narcissus).toFixed(2)} leva left.`);
         }
         else {
            console.log(`Not enough money, you need ${(narcissus - budget).toFixed(2)} leva more.`);
         }
      }
      else {
         if (budget >= narcissus){
            console.log(`Hey, you have a great garden with ${numberOfFlower} ${kindOfFlower} and ${(budget - narcissus).toFixed(2)} leva left.`);
         }
         else {
            console.log(`Not enough money, you need ${(narcissus - budget).toFixed(2)} leva more.`);
         }
      }
     }
     else{
      if (numberOfFlower < 80){
         gladiolus = gladiolus + (gladiolus * 0.20);
         if (budget >= gladiolus){
            console.log(`Hey, you have a great garden with ${numberOfFlower} ${kindOfFlower} and ${(budget - gladiolus).toFixed(2)} leva left.`);
         }
         else {
            console.log(`Not enough money, you need ${(gladiolus - budget).toFixed(2)} leva more.`);
         }
      }
      else {
         if (budget >= gladiolus){
            console.log(`Hey, you have a great garden with ${numberOfFlower} ${kindOfFlower} and ${(budget - gladiolus).toFixed(2)} leva left.`);
         }
         else {
            console.log(`Not enough money, you need ${(gladiolus - budget).toFixed(2)} leva more.`);
         }
      }
     }


}

newHouse(["Tulips","88","260"])