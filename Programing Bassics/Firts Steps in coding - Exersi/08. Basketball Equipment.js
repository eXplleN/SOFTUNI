function basketballEquipment(input) {

    let yearTax = Number(input[0]);

    let snickers = yearTax - (yearTax * 0.40);
    let ekip = snickers - (snickers * 0.20);
    let basketball = ekip * 0.25;
    let accsesories = basketball * 0.2;

    let totalPrice = yearTax + snickers + ekip + basketball + accsesories;

    console.log(totalPrice);


}

basketballEquipment(["365"]);