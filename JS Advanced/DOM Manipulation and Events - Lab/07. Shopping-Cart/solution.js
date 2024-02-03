function solve() {

   let allButtons = Array.from(document.getElementsByClassName('add-product'));
   let checkOut = Array.from(document.getElementsByClassName('checkout'))[0];
   let area = document.querySelector('textarea');
   let totalCost = 0;
   let shopingList = new Set();

   for (let button of allButtons) {
      button.addEventListener('click', addProduct);
   }

   checkOut.addEventListener('click', total);

   function total(event) {
      for (let button of allButtons) {
         button.disabled = true;
      }
      let finalList = Array.from(shopingList);
      area.textContent += `You bought ${finalList.join(', ')} for ${totalCost.toFixed(2)}.`;
      checkOut.disabled = true;
   }

   function addProduct(event) {
      let parent = event.target.parentElement.parentElement;
      let productName = parent.querySelector('.product-title').textContent;
      let productPrice = parent.querySelector('.product-line-price').textContent;
      totalCost += Number(productPrice);
      shopingList.add(productName);
      area.textContent += `Added ${productName} for ${productPrice} to the cart.\n`;
   }
}