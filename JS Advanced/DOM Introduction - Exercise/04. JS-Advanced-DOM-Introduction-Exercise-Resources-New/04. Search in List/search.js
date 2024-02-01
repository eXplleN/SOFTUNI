function search() {

   let towns = document.querySelectorAll('#towns li');
   let searched = document.querySelector('input#searchText').value;
   let count = 0;
   
  for (let city of towns) {
    let current = city.textContent;
      if (current.includes(searched)){
        count++;
        city.style.textDecoration = 'underline';
        city.style.fontWeight = 'bold';
      }
  }
 document.getElementById('result').textContent = `${count} matches found`;
}
