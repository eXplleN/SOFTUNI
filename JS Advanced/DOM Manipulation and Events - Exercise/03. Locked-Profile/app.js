function lockedProfile() {

    let buttons = Array.from(document.querySelectorAll("button"));

    buttons.forEach(x => x.addEventListener('click', clickHandler));

    function clickHandler(event) {
        let hiddenInfo = event.currentTarget.parentElement.querySelector("div");
        let currentRadioBtn = event.target.parentElement.querySelector("input[type='radio']:checked");

        if (currentRadioBtn.value == "unlock") {
            if (event.currentTarget.textContent === "Show more") {
                event.currentTarget.textContent = "Hide it";
                hiddenInfo.style.display = "block";

            }
            else {
                event.currentTarget.textContent = "Show more";
                hiddenInfo.style.dispaly = "none";
            }
        }
    }
}