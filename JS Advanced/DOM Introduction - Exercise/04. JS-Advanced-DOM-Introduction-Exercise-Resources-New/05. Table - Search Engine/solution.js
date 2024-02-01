function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      let table = document.querySelector('tbody');
      let rows = table.getElementsByTagName('tr');
      let searched = document.getElementById('searchField').value;
      
      if (searched !== '') {
         for (let i = 0; i < rows.length; i++) {
            let cells = rows[i].getElementsByTagName('td');
   
            for (let b = 0; b < cells.length; b++) {
               let arr = Array.from(cells);
   
               if (arr[b].textContent.includes(searched)) {
                  rows[i].classList.add('select');
                  debugger
               }
            }
         }
      }
   }
}