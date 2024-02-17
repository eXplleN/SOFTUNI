window.addEventListener('load', solve);

function solve() {

    let firstNameRef = document.getElementById("first-name");
    let lastNameRef = document.getElementById("last-name");
    let peopleCountRef = document.getElementById("people-count");
    let fromDateRef = document.getElementById("from-date");
    let daysCountRef = document.getElementById("days-count");
    let nextStepBtnRef = document.getElementById("next-btn");

    nextStepBtnRef.addEventListener("click", nextHandler);

    function nextHandler(event) {
        event.preventDefault();
        if (firstNameRef.value === "" || lastNameRef.value === "" || peopleCountRef.value === "" || fromDateRef.value === "" || daysCountRef.value === "") {
            return;
        }

        let li = document.createElement("li");
        li.setAttribute("class", "ticket");

        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");

        let editBtn = document.createElement("button");
        editBtn.setAttribute("class", "edit-btn");
        editBtn.textContent = "Edit";

        let continueBtn = document.createElement("button");
        continueBtn.setAttribute("class", "continue-btn");
        continueBtn.textContent = "Continue";

        h3.textContent = `Name: ${firstNameRef.value} ${lastNameRef.value}`;
        p1.textContent = `From date: ${fromDateRef.value}`;
        p2.textContent = `For ${daysCountRef.value} days`;
        p3.textContent = `For ${peopleCountRef.value} people`;

        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);

        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(continueBtn);

        let tickedInfoListRef = document.getElementsByClassName("ticket-info-list")[0];

        tickedInfoListRef.appendChild(li);
        debugger
        let firstNameValue = firstNameRef.value;
        let lastNameValue = lastNameRef.value;
        let peopleCountValue = peopleCountRef.value;
        let fromDateValue = fromDateRef.value;
        let daysCountValue = daysCountRef.value;

        nextStepBtnRef.disabled = true;

        firstNameRef.value = "";
        lastNameRef.value = "";
        peopleCountRef.value = "";
        fromDateRef.value = "";
        daysCountRef.value = "";

        editBtn.addEventListener("click", editHandler);

        function editHandler(event) {

            nextStepBtnRef.disabled = false;

            firstNameRef.value = firstNameValue;
            lastNameRef.value = lastNameValue;
            peopleCountRef.value = peopleCountValue;
            fromDateRef.value = fromDateValue;
            daysCountRef.value = daysCountValue;
            li.remove();
        }

        continueBtn.addEventListener("click", continueHandler);



        function continueHandler(event) {

            let cancelBtn = document.createElement("button");
            cancelBtn.setAttribute("class", "cancel-btn");
            cancelBtn.textContent = "Cancel";

            let confirmBtn = document.createElement("button");
            confirmBtn.setAttribute("class", "confirm-btn");
            confirmBtn.textContent = "Confirm";

            let liTicket = document.createElement("li");
            liTicket.setAttribute("class", "ticket-content");

            let artickleTiket = document.createElement("article");
            let h3Tiket = document.createElement("h3");
            let p1Tiket = document.createElement("p");
            let p2Tiket = document.createElement("p");
            let p3Tiket = document.createElement("p");

            h3Tiket.textContent = `Name: ${firstNameValue} ${lastNameValue}`;
            p1Tiket.textContent = `From date: ${fromDateValue}`;
            p2Tiket.textContent = `For ${daysCountValue} days`;
            p3Tiket.textContent = `For ${peopleCountValue} people`;

            artickleTiket.appendChild(h3Tiket);
            artickleTiket.appendChild(p1Tiket);
            artickleTiket.appendChild(p2Tiket);
            artickleTiket.appendChild(p3Tiket);

            liTicket.appendChild(artickleTiket);
            liTicket.appendChild(confirmBtn);
            liTicket.appendChild(cancelBtn);

            let confirmTiketRef = document.getElementsByClassName("confirm-ticket")[0];

            confirmTiketRef.appendChild(liTicket);

            li.remove();
            //changed here event listener was BEFORE button
            cancelBtn.addEventListener("click", cancelHandler);
            function cancelHandler(event) {
                nextStepBtnRef.disabled = false;

                //removed li instead of ul!!!!!
                liTicket.remove();
            }

            confirmBtn.addEventListener("click", confirmHandler);

            function confirmHandler(event) {
                let mainRef = document.getElementById("main");
                mainRef.remove();

                let h1Element = document.createElement("h1");
                h1Element.setAttribute("id", "thank-you");
                h1Element.textContent = "Thank you, have a nice day!";

                let backBtn = document.createElement("button");
                backBtn.setAttribute("id", "back-btn");
                backBtn.textContent = "Back";

                let bodyRef = document.querySelectorAll("body")[0];

                bodyRef.appendChild(h1Element);
                bodyRef.appendChild(backBtn);

                backBtn.addEventListener("click", backHandler);

                function backHandler(event) {
                    window.location.reload();
                }
            }
        }
    }
}