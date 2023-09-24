function yardGreening(input) {
      let a = Number(input[0]);
      let price = a * 7.61;
      let discount = 0.18 * price;
      let priceDiscount = price - discount;
      console.log(`The final price is: ${priceDiscount} lv.`);
      console.log(`The discount is: ${discount} lv.`);

}

yardGreening(["550"]);