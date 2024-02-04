function create(words) {

   let final = document.getElementById('content');

   for (let word of words) {
      let paragraph = document.createElement('p');
      let d = document.createElement('div');
      paragraph.textContent = word;
      paragraph.style.display = 'none';
      d.appendChild(paragraph);
      d.addEventListener('click', lookingForClick);
      final.appendChild(d);
   }

   function lookingForClick(event) {
     let paragraph = event.currentTarget.querySelector('p');
     if (paragraph.style.display === 'none') {
      paragraph.style.display = 'block';
     }
     else {
      paragraph.style.display = 'none';
     }
   }
}