function passwordValidator(str) {

    let countNumbers = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] >= '0' && str[i] <= '9') {
            countNumbers++;
        }
    }

    function passwordLength(str) {
        if (str.length < 6 || str.length > 10) {
            return false;
        }
        return true;
    }

    function numbersCount(str) {
        if (countNumbers < 2) {
            return false;
        }
        return true;
    }

    function print(str) {
        if (passwordLength(str) == false && numbersCount(str) == false && checkForSymbols(str) == true) {
            console.log(`Password must be between 6 and 10 characters`);
            console.log(`Password must consist only of letters and digits`);
            console.log(`Password must have at least 2 digits`);
        }
        else if (passwordLength(str) == false && numbersCount(str) == false) {
            console.log(`Password must be between 6 and 10 characters`);
            console.log(`Password must have at least 2 digits`);
        }
        else if (passwordLength(str) == false && checkForSymbols(str) == true) {
            console.log(`Password must be between 6 and 10 characters`);
            console.log(`Password must consist only of letters and digits`);
        }
        else if (numbersCount(str) == false && checkForSymbols(str) == true) {
            console.log(`Password must consist only of letters and digits`);
            console.log(`Password must have at least 2 digits`);
        }
        else if (passwordLength(str) == false) {
            console.log(`Password must be between 6 and 10 characters`);
        }
        else if (checkForSymbols(str) == true) {
            console.log(`Password must consist only of letters and digits`);
        }
        else if (numbersCount(str) == false) {
            console.log(`Password must have at least 2 digits`);
        }
        else {
            console.log(`Password is valid`);
        }
    }

    function checkForSymbols(password) {
        for (let i = 0; i < password.length; i++) {
            let letter = password[i].charCodeAt(0);
            if ((letter >= 33 && letter <= 47) || (letter >= 58 && letter <= 64) || (letter >= 91 && letter <= 96) || (letter >= 123 && letter <= 126)) {
                return true;
            }
        }
        return false;
    }

    print(str)
}

passwordValidator('n*&&*')
//passwordValidator('MyPass123')
//passwordValidator('Pa$s$s')