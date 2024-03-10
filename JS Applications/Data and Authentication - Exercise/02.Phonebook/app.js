function attachEvents() {
    let phonebookRef = document.getElementById("phonebook");
    let loadBtn = document.getElementById("btnLoad");
    let createBtn = document.getElementById("btnCreate");
    let personRef = document.getElementById("person");
    let phoneRef = document.getElementById("phone");

    let URL = 'http://localhost:3030/jsonstore/phonebook';

    loadBtn.addEventListener("click", loadHandler);

    async function loadHandler(event) {
        event.preventDefault();

        let response = await fetch(URL);
        let data = await response.json();

        phonebookRef.innerHTML = "";

        Object.values(data).forEach(x => {
            let person = x.person;
            let phone = x.phone;
            let id = x._id;

            phonebookRef.appendChild(createLi(person, phone, id));
        })

    }

    function createLi(person, phone, id) {
        let li = document.createElement("li");
        li.textContent = `${person}: ${phone}`;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.dataset.id = id;

        deleteBtn.addEventListener("click", deleteHandler);

        li.appendChild(deleteBtn);

        return li;
    }

    async function deleteHandler(event) {

        let btnId = event.target.dataset;
        await fetch(URL + `/${btnId.id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        });
        
        let response = await fetch(URL);
        let data = await response.json();
        
        phonebookRef.innerHTML = "";

        Object.values(data).forEach(x => {
            let person = x.person;
            let phone = x.phone;
            let id = x._id;

            phonebookRef.appendChild(createLi(person, phone, id));
        })
    }

    createBtn.addEventListener("click", createHandler);

    async function createHandler(event) {
        
        let personInfo = {
            person: personRef.value,
            phone: phoneRef.value
        }

        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(personInfo)
        });

        personRef.value = "";
        phoneRef.value = "";
        
        loadHandler(event);
    }
}

attachEvents();