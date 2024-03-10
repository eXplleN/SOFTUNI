function solve() {
    const URL = 'http://localhost:3030/jsonstore/collections/books';
    const tbodyRef = document.querySelector("table tbody");
    const editFormRef = document.getElementById("editForm");
    const formRef = document.getElementById("form");

    // Function to load books
    async function loadBooks() {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            renderBooks(data);
        } catch (error) {
            console.error('Error loading books:', error);
        }
    }

    // Function to render books
    function renderBooks(data) {
        tbodyRef.innerHTML = "";
        Object.entries(data).forEach(([key, { author, title }]) => {
            tbodyRef.appendChild(createBook(author, title, key));
        });
    }

    // Function to create book element
    function createBook(author, title, btnsId) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>
                <button class="edit-btn" data-id="${btnsId}">Edit</button>
                <button class="delete-btn" data-id="${btnsId}">Delete</button>
            </td>
        `;
        tr.querySelector('.edit-btn').addEventListener("click", editHandler);
        tr.querySelector('.delete-btn').addEventListener("click", deleteHandler);
        return tr;
    }

    // Function to handle edit
    async function editHandler(event) {
        const bookId = event.target.dataset.id;
        formRef.style.display = "none";
        editFormRef.style.display = "block";

        editFormRef.dataset.id = bookId;

        try {
            const response = await fetch(`${URL}/${bookId}`);
            const data = await response.json();
            const { title, author } = data;
            editFormRef.querySelector('input[name="title"]').value = title;
            editFormRef.querySelector('input[name="author"]').value = author;
        } catch (error) {
            console.error('Error loading book for edit:', error);
        }
    }

    // Function to handle delete
    async function deleteHandler(event) {
        const bookId = event.target.dataset.id;
        try {
            const response = await fetch(`${URL}/${bookId}`, {
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
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    }

    // Event listener for edit form submission
    editFormRef.addEventListener("submit", async function saveHandler(event) {
        event.preventDefault();
        const titleRef = editFormRef.querySelector('input[name="title"]');
        const authorRef = editFormRef.querySelector('input[name="author"]');
        const bookId = editFormRef.dataset.id;
        const editedBook = {
            author: authorRef.value,
            title: titleRef.value
        };
        try {
            await fetch(`${URL}/${bookId}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(editedBook)
            });
            editFormRef.style.display = "none";
            formRef.style.display = "block";
            await loadBooks();
        } catch (error) {
            console.error('Error saving book:', error);
        }
    });

    // Event listener for form submission
    formRef.addEventListener("submit", async function submitHandler(event) {
        event.preventDefault();
        const titleInputRef = formRef.querySelector('input[name="title"]');
        const authorInputRef = formRef.querySelector('input[name="author"]');
        if (titleInputRef.value === "" || authorInputRef.value === "") {
            console.log('All fields are required');
        } else {
            const newBook = {
                author: authorInputRef.value,
                title: titleInputRef.value
            };
            try {
                await fetch(URL, {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(newBook)
                });
                authorInputRef.value = "";
                titleInputRef.value = "";
                await loadBooks();
            } catch (error) {
                console.error('Error adding new book:', error);
            }
        }
    });

    // Initial load of books
    loadBooks();
}
solve()