function validate() {
    let registerRef = document.getElementById("registerForm");
    registerRef.addEventListener('submit', (e) => {
        e.preventDefault();
    });
    
    let userNameRef = document.getElementById("username");
    let emailRef = document.getElementById("email");
    let passwordRef = document.getElementById("password");
    let confirmPasswordRef = document.getElementById("confirm-password");
    let companyRef = document.getElementById("company");
    let companyNumberRef = document.getElementById("companyNumber");
    let companyInforRef = document.getElementById("companyInfo");
    let submitRef = document.getElementById("submit");
    let validRef = document.getElementById("valid");
    submitRef.addEventListener('click', handler);
    companyRef.addEventListener("change", checkbox);

    let userNamePattern = /^[a-zA-Z0-9]+$/g;
    let passwordPattern = /^[\w]{5,15}$/g;
    let emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;
    
    let isValid = true;
   
    function checkbox(e) {
        if (companyRef.checked){
            companyInforRef.style.display = "block";
        }
        else {
            companyInforRef.style.display = "none";
        }
    }

    function handler(e) {
        
        if (userNameRef.value.length >= 3 && userNameRef.value.length <= 20) {
            if (userNamePattern.test(userNameRef.value)) {
                userNameRef.style.border = "none";
            }
            else {
                userNameRef.style.borderColor = "red";
                isValid = false;
            }
        }
        else {
            userNameRef.style.borderColor = "red";
            isValid = false;
        }

       if (!passwordPattern.test(passwordRef.value)) {
            passwordRef.style.borderColor = "red";
            confirmPasswordRef.style.borderColor = "red";
            isValid = false;
        }
        else {
            if (passwordRef.value === confirmPasswordRef.value) {
                passwordRef.style.border = "none";
                confirmPasswordRef.style.border = "none";
            }
            else {
            passwordRef.style.borderColor = "red";
            confirmPasswordRef.style.borderColor = "red";
            isValid = false;
            }
        }

        if (emailPattern.test(emailRef.value)) {
            emailRef.style.border = "none";
        }
        else {
            emailRef.style.borderColor = "red";
            isValid = false;
        }

        if (companyRef.checked) {
            if(companyNumberRef.value >= 1000 && companyNumberRef.value <= 9999) {
                companyNumberRef.style.border = "none";
            }
            else {
                companyNumberRef.style.borderColor = "red";
                isValid = false;
            }
        }
        
        if (isValid) {
           validRef.style.display = "block";
        }
        else {
            validRef.style.display = "none";
        }
    }
}
