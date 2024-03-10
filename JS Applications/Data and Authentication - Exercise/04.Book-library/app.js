function solve() {

    let URL = 'http://localhost:3030/jsonstore/collections/books';
    let tbodyRef = document.querySelector("table tbody");
    let editFormRef = document.getElementById("editForm");
    let formRef = document.getElementById("form");

    let loadBooksBtn = document.getElementById("loadBooks");
    loadBooksBtn.addEventListener("click", loadBooksHandler);

    async function loadBooksHandler(event) {
        let response = await fetch(URL);
        let data = await response.json();

        tbodyRef.innerHTML = "";

        Object.entries(data).forEach(x => {
            let [key, value] = x;
            let { author, title } = value;
            let btnsId = key;
            tbodyRef.appendChild(createBook(author, title, btnsId));
        });
    }

    function createBook(author, title, btnsId) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");

        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.dataset.id = btnsId;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.dataset.id = btnsId;

        editBtn.addEventListener("click", editHandler);

        async function editHandler(event) {
            let bookId = event.target.dataset.id;
            formRef.style.display = "none";
            editFormRef.style.display = "block";

            editFormRef.dataset.id = bookId;

            let response = await fetch(URL + '/' + bookId)
            let data = await response.json();

            let titleRef = editFormRef.querySelector('input[name="title"]');
            let authorRef = editFormRef.querySelector('input[name="author"]');
            titleRef.value = data.title;
            authorRef.value = data.author;
        }

        deleteBtn.addEventListener("click", deleteHandler);

        async function deleteHandler(event) {
            let bookId = event.target.dataset.id;
            let response = await fetch(URL + '/' + bookId, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (response.ok) {
                event.target.closest('tr').remove();
            } else {
                console.error("Error deleting book.");
            }
        }

        td1.textContent = title;
        td2.textContent = author;
        td3.appendChild(editBtn);
        td3.appendChild(deleteBtn);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        return tr;
    }

    editFormRef.addEventListener("submit", saveHandler);

    async function saveHandler(event) {
        event.preventDefault();
        console.log("works");
        let titleRef = editFormRef.querySelector('input[name="title"]');
        let authorRef = editFormRef.querySelector('input[name="author"]');

        let bookId = editFormRef.dataset.id;

        let editedBook = {
            author: authorRef.value,
            title: titleRef.value
        }
       
        await fetch(URL + '/' + bookId, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(editedBook)
        });

        editFormRef.style.display = "none";
        formRef.style.display = "block";

        loadBooksHandler();
    }

    formRef.addEventListener("submit", submitHandler);

    async function submitHandler(event) {
        event.preventDefault();

        let titleInputRef = formRef.querySelector('input[name="title"]');
        let authorInputRef = formRef.querySelector('input[name="author"]');

        if (titleInputRef.value === "" || authorInputRef.value === "") {
            return  console.log('All fields are required');;
        }
        else {
            let newBook = {
                author: authorInputRef.value,
                title: titleInputRef.value
            }

            await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-type" : "application/json"
                },
                body: JSON.stringify(newBook)
            });

            authorInputRef.value = "";
            titleInputRef.value = "";

            loadBooksHandler();
        }
    }
}
solve()