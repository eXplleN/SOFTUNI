function login(input) {

    let userName = input[0];
    let passWord = '';

    for (let i = userName.length - 1; i >= 0; i--) {
        passWord += userName[i];
    }

    let attempt = input[1];
    let index = 2;
    let count = 0;

    while (attempt != passWord) {
        count++;

        if (count == 4) {
            console.log(`User ${userName} blocked!`);
            return;
        }
        console.log(`Incorrect password. Try again.`);
        attempt = input[index];
        index++;
    }
    console.log(`User ${userName} logged in.`);
}

login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])