function solve() {

  let arr = document.getElementById('input').value.split('.');
  arr.pop();

  let targetId = document.getElementById('output');
  let text = '';

  if (arr.length < 3) {
    for (let sentence of arr) {
      text += sentence + '.';
    }
    let paragraph = document.createElement('p');
    paragraph.textContent = text;
    targetId.appendChild(paragraph);
  }
  else {
    for (let i = 0; i < arr.length; i += 3) {
      let text = '';
      for (let b = i; b < i + 3 && b < arr.length; b++) {
        let sentence = arr[b];
        text += sentence + '.';
      }
      let paragraph = document.createElement('p');
      paragraph.textContent = text;
      targetId.appendChild(paragraph);
    }
  }
}