function trekkingMania(input){

    let groups = Number(input[0]);
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;
    let allPeople = 0;


    for (let i = 1; i < input.length; i++){
          let people = Number(input[i]);

         if (people <= 5){

            musala += people;
         }
         else if (people >= 6 && people <= 12){
 
            monblan += people;
         }
         else if (people >= 13 && people <= 25){

            kilimandjaro += people;
         }
         else if (people >= 26 && people <= 40){

            k2 += people;
         }
         else {

            everest += people;
         }

    }

    allPeople = musala + monblan + kilimandjaro + k2 + everest;

    console.log(`${(musala / allPeople * 100).toFixed(2)}%`);
    console.log(`${(monblan / allPeople * 100).toFixed(2)}%`);
    console.log(`${(kilimandjaro / allPeople * 100).toFixed(2)}%`);
    console.log(`${(k2 / allPeople * 100).toFixed(2)}%`);
    console.log(`${(everest / allPeople * 100).toFixed(2)}%`);
        


}
trekkingMania(["10","10","5","1","100","12","26","17","37","40","78"]);