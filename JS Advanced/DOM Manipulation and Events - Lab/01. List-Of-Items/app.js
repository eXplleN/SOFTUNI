function addItem() {

    let input = document.getElementById('newItemText');

    if (input.value.length == 0) {
        return;
    }

    let liEl = document.createElement('li');
    liEl.textContent = input.value;

    let list = document.getElementById('items');
    list.appendChild(liEl);

    input.value = ''
}