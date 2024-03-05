function getInfo() {
    let stopId = document.getElementById('stopId').value;
    let stopNameRef = document.getElementById('stopName');
    let busListRef = document.getElementById('buses');

    stopNameRef.textContent = "";
    busListRef.textContent = "";

    let url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    let response = fetch(url);

    response.then(res => {
        res.json().then(data => {
            stopNameRef.textContent = data.name;
            createListItem(Object.entries(data.buses));
        }).catch(err => {
            stopNameRef.textContent = 'Error';
        })
    }).catch(err => {
        stopNameRef.textContent = 'Error';
    })

    function createListItem(data) {
        for ([bus, time] of data) {
            let item = document.createElement('li');
            item.textContent = `Bus ${bus} arrives in ${time} minutes`;
            busListRef.appendChild(item);
        }
    }
}
