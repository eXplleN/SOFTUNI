window.addEventListener('load', start);

function start() {
    let userData = localStorage.getItem('user');
    
    if(!userData) {
      window.location = "login.html";
      return;
    }
    document.querySelector('form').addEventListener('submit', onCreate);
}

async function onCreate(event) {
    event.preventDefault();

    let formData = new FormData(event,target);
    let data = Object.fromEntries(formData.entries());

    let body = {
     name: data.name.trim(),
     img: data.img.trim(),
     ingredients: parseMultiline(data.ingredients),
     steps: parseMultiline(data.steps)
    }

    try {
      let url = 'http://localhost:3030/data/recipes';

      let userData = JSON.parse(localStorage.getItem('user'));
    
     if(!userData) {
       throw new Error('You must be logged in to post recipes!');
     }

     let response = await fetch(url, {
        method: "post",
        headers: {
            "Content-Type" : "application/json",
            'X-Authorization': userData.accessToken
        },
        body: JSON.stringify(body)
     });

     if(!response.ok) {
        let err = await response.json();
        throw new Error(err.message);
     }

     window.location = 'index.html';
        
    } catch (err) {
        alert(err.message);
    }
}

function parseMultiline(data) {
    return data
     .split('\n')
     .map(r => r.trim())
     .filter(r => r);
}