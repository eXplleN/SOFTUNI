window.addEventListener('load', start);

function start() {
    document.querySelector('form').addEventListener('submit', onLogin);
}

async function onLogin(event) {
    event.preventDefault();

    let formData = new FormData(event.target);
    let data = Object.fromEntries(formData.entries());

    let email = data.email.trim();
    let password = data.password.trim();

    let url = 'http://localhost:3030/users/login';

    try {
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