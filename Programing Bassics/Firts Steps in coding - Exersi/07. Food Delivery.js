function foodDelivery(input) {

        let chicken = Number(input[0]) * 10.35;
        let fish = Number(input[1]) * 12.40;
        let vegeterian = Number(input[2]) * 8.15;

        let dessert = (chicken + fish + vegeterian) * 0.2;
        let bill = chicken + fish + vegeterian + dessert + 2.50;
        
        console.log(bill);

}

foodDelivery(["2","4","3"]);