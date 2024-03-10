function attachEvents() {
    let url = "http://localhost:3030/jsonstore/messenger";
    let textAreaRef = document.getElementById("messages");
    let submitBtn = document.getElementById("submit");
    let refreshBtn = document.getElementById("refresh");
    let authorRef = document.querySelector('input[name="author"]');
    let contentRef = document.querySelector('input[name="content"]');

    submitBtn.addEventListener("click", subHandler);

    async function subHandler(event) {
        event.preventDefault();

        if (!authorRef.value || !contentRef.value) {
            return
        }

        let messageInfo = {
            author: authorRef.value,
            content: contentRef.value
        }

        await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(messageInfo)
        });

        authorRef.value = "";
        contentRef.value = "";
    }

    refreshBtn.addEventListener("click", refreshHandler);

    async function refreshHandler(event) {
        let responese = await fetch(url);
        let data = await responese.json();
        textAreaRef.textContent = "";
        
        let text = [];

        Object.values(data).forEach((x => {
            let author = x.author;
            let content = x.content;
            text.push(`${author}: ${content}`);
        }))

        textAreaRef.textContent = text.join('\n');
    }
}

attachEvents();