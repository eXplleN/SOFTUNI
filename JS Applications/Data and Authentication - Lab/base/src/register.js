window.addEventListener('load', start);

function start() {
    document.querySelector('form').addEventListener('submit', onRegister);
}

async function onRegister(event) {
    event.preventDefault();

    let formData = new FormData(event.target);
    let data = Object.fromEntries(formData.entries());

    let email = data.email.trim();
    let password = data.password.trim();
    let repass = data.rePass.trim();

    let url = 'http://localhost:3030/users/register';

    try {
       if (!email || !password) {
        throw new Error('All fields are required!');
       }
       if (password != repass) {
        throw new Error("Passwords don\`t match!");
       }

      let response = await fetch(url, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
     });
    
       if (!response.ok) {
          let err = await response.json();
          throw new Error(err.message);
       }

       let userData = await response.json();

       localStorage.setItem('user', JSON.stringify(userData));

       window.location = 'index.html';

    } catch (err) {
        alert(err.message);
    }
}