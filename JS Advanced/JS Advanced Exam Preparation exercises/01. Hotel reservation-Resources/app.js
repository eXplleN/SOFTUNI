window.addEventListener('load', solve);

function solve() {

    let homeContainerRef = document.querySelector("body");
    homeContainerRef.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    let firstNameRef = document.getElementById("first-name");
    let lastNameRef = document.getElementById("last-name");
    let checkInDateRef = document.getElementById("date-in");
    let checkOutDateRef = document.getElementById("date-out");
    let peopleCountRef = document.getElementById("people-count");

    let nextBtnRef = document.getElementById("next-btn");
    nextBtnRef.addEventListener('click', nextHandler);

    
    function nextHandler(event) {

        if (firstNameRef.value === "" || lastNameRef.value === "" || checkInDateRef.value === "" || checkOutDateRef.value === "" || peopleCountRef.value === "" || new Date(checkInDateRef.value) >= new Date(checkOutDateRef.value)) {
             return;
         }

        let moveTo = document.getElementsByClassName("info-list")[0];
        let edditBtn = document.createElement("button");
        edditBtn.setAttribute('class', "edit-btn");
        edditBtn.textContent = "Edit";

        let continueBtn = document.createElement("button");
        continueBtn.setAttribute('class', "continue-btn");
        continueBtn.textContent = "Continue";

        let li = document.createElement("li");
        li.setAttribute("class", "reservation-content");
        let artickle = document.createElement("article");
        let h3 = document.createElement("h3");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");

        h3.textContent = `Name: ${firstNameRef.value} ${lastNameRef.value}`;
        p1.textContent = `From date: ${checkInDateRef.value}`;
        p2.textContent = `To date: ${checkOutDateRef.value}`;
        p3.textContent = `${peopleCountRef.value} people`;

        artickle.appendChild(h3);
        artickle.appendChild(p1);
        artickle.appendChild(p2);
        artickle.appendChild(p3);

        
        li.appendChild(artickle);
        li.appendChild(edditBtn);
        li.appendChild(continueBtn);

        moveTo.appendChild(li);

        let fNValue = firstNameRef.value;
        let lNValue = lastNameRef.value;
        let cIdRValue = checkInDateRef.value;
        let cOdRValue = checkOutDateRef.value;
        let pCValue = peopleCountRef.value;

        firstNameRef.value = "";
        lastNameRef.value = "";
        checkInDateRef.value = "";
        checkOutDateRef.value = "";
        peopleCountRef.value = "";

        nextBtnRef.disabled = true;

        edditBtn.addEventListener("click", editHandler);

        function editHandler(event) {
            nextBtnRef.disabled = false;
            firstNameRef.value = fNValue;
            lastNameRef.value = lNValue;
            checkInDateRef.value = cIdRValue;
            checkOutDateRef.value = cOdRValue;
            peopleCountRef.value = pCValue;
            li.remove();
        }

        continueBtn.addEventListener("click", continueHandler);
        
        function continueHandler(event) {
            let confirmList = document.getElementsByClassName("confirm-list")[0];
             console.log("WORKS");
            let confirmBtn = document.createElement("button");
            confirmBtn.setAttribute("class", "confirm-btn");
            confirmBtn.textContent = "Confirm";
            debugger
            let cancelBtn = document.createElement("button");
            cancelBtn.setAttribute("class", "cancel-btn");
            cancelBtn.textContent = "Cancel";

            let liReservation = document.createElement("li");
            liReservation.setAttribute("class", "reservation-content");
            let artickleReservation = document.createElement("article");
            let h3Reservation = document.createElement("h3");
            let p1Reservation = document.createElement("p");
            let p2Reservation= document.createElement("p");
            let p3Reservation= document.createElement("p");

            h3Reservation.textContent = `Name: ${fNValue} ${lNValue}`;
            p1Reservation.textContent = `From date: ${cIdRValue}`;
            p2Reservation.textContent = `To date: ${cOdRValue}`;
            p3Reservation.textContent = `${pCValue} people`;

            artickleReservation.appendChild(h3Reservation);
            artickleReservation.appendChild(p1Reservation);
            artickleReservation.appendChild(p2Reservation);
            artickleReservation.appendChild(p3Reservation);

            
            liReservation.appendChild(artickleReservation);
            liReservation.appendChild(confirmBtn);
            liReservation.appendChild(cancelBtn);

            confirmList.appendChild(liReservation);
debugger
            li.remove();

            confirmBtn.addEventListener('click', confirmHandler);

            function confirmHandler(element) {
                nextBtnRef.disabled = false;
                liReservation.remove();
    
                let verificationRef = document.getElementById("verification");
                verificationRef.textContent = "Confirmed.";
                verificationRef.setAttribute("class", "reservation-confirmed");
    
            }

            cancelBtn.addEventListener("click", cancleHandler);

            function cancleHandler(event) {
                nextBtnRef.disabled = false;
                liReservation.remove();

                let verificationRef = document.getElementById("verification");
                verificationRef.textContent = "Cancelled.";
                verificationRef.setAttribute("class", "reservation-cancelled");
            }
        }
    }
}





