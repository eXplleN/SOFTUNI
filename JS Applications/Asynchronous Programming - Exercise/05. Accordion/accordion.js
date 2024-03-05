
function solution({ _id, title, content }) {

    let divAccor = document.createElement("div");
    divAccor.classList.add("accordion");

    let divHead = document.createElement("div");
    divHead.classList.add("head");

    let span = document.createElement("span");
    span.textContent = title;

    let button = document.createElement("button");
    button.classList.add("button");
    button.setAttribute("id", `${_id}`);
    button.textContent = "More";

    let divExtra = document.createElement("div");
    divExtra.classList.add("extra");

    let p = document.createElement("p");
    p.textContent = content;

    divAccor.appendChild(divHead);
    divHead.appendChild(span);
    divHead.appendChild(button);
    divAccor.appendChild(divExtra);
    divExtra.appendChild(p);

    button.addEventListener("click", buttonHandler);

    function buttonHandler(event) {
        if (button.textContent === "More"){
            button.textContent = "Less";
            divExtra.style.display = "block";
        }
        else {
            button.textContent = "More";
            divExtra.style.display = "";
        }
    }

    return divAccor;
}

async function getArticles() {
    let idMainRef = document.getElementById("main");
    let titlesURL = "http://localhost:3030/jsonstore/advanced/articles/list";
    let detailsURL = "http://localhost:3030/jsonstore/advanced/articles/details/";

    let response = await fetch(titlesURL);
    let data = await response.json();
 console.log(data);
    idMainRef.innerHTML = '';

    let detailsPromises = data.map(article => getDetails(detailsURL + article._id));

    let details = await Promise.all(detailsPromises);
 console.log(details);
    details.forEach(detail => {
        idMainRef.appendChild(solution(detail));
    });
}

async function getDetails(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

getArticles();