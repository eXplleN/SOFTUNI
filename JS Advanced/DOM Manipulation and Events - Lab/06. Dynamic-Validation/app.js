function validate() {

    let inputText = document.getElementById('email');

    inputText.addEventListener('change', check);

    function check(event) {
        let textValue = inputText.value;
        let pattern = /[a-z]+\@[a-z]+\.[a-z]+/g;
        let matched = textValue.match(pattern);
        debugger
        console.log(matched);
        if (matched == null) {
            event.currentTarget.classList.add('error');
        }
        else {
            event.currentTarget.classList.remove('error');
        }
    }
}