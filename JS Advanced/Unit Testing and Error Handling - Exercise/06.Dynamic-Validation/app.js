function validate() {
    const inputField = document.getElementById("email");
    inputField.addEventListener("change", check);

    function check(e) {
        let pattern = /^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/g;
        let email = e.target.value;
      
        if (pattern.test(email)) {
            e.target.classList.remove("error");
        }
        else {
            e.target.classList.add("error");
        }
    }
}