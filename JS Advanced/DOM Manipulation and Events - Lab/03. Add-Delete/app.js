function addItem() {
    let input = document.getElementById('newItemText');
    let list = document.getElementById('items');

    if (input.value.length == 0) {
        return;
    }

    let liEl = document.createElement('li');
    liEl.textContent = input.value;
    list.appendChild(liEl);

    let remove = document.createElement('a');
    remove.textContent = '[Delete]';
    remove.href = '#';
    remove.addEventListener('click', onRemove)
    liEl.appendChild(remove);

    input.value = '';

    function onRemove(event) {
        let remove = event.target;
        let liEl = remove.parentElement;
        liEl.remove();
    }
}