function solve() {
    let infoRef = document.getElementsByClassName('info')[0];
    let departBtnRef = document.getElementById('depart');
    let arriveBtnRef = document.getElementById('arrive');

    let url = `http://localhost:3030/jsonstore/bus/schedule/`;

    let stopInfo = {
        currentStop: "",
        nextStop: "depot"
    }

    async function depart() {
        try {
            let response = await fetch(url + stopInfo.nextStop);
            let data = await response.json();
            stopInfo.currentStop = data.name;
            stopInfo.nextStop = data.next;
            infoRef.textContent = `Next stop ${stopInfo.currentStop}`;
            departBtnRef.disabled = true;
            arriveBtnRef.disabled = false;
        } catch (error) {
            infoRef.textContent = "Error";
        }
    }

    async function arrive() {
        try {
            infoRef.textContent = `Arriving at ${stopInfo.currentStop}`;
            departBtnRef.disabled = false;
            arriveBtnRef.disabled = true;
        } catch (error) {
            infoRef.textContent = "Error";
        }

    }

    return {
        depart,
        arrive
    };
}

let result = solve();