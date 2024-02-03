function focused() {

    let sections = document.querySelectorAll('input');

    for (let section of sections) {
        section.addEventListener('focus', lookForClick);
        section.addEventListener('blur', outOfTheInput);
    }

    function lookForClick(event) {
        let parentElement = event.currentTarget.parentElement;
        parentElement.classList.add('focused');
    }

    function outOfTheInput(event) {
        let parentElement = event.currentTarget.parentElement;
        parentElement.classList.remove('focused');
    }
}