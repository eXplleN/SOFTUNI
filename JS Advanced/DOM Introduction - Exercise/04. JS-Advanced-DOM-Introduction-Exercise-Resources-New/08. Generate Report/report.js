function generateReport() {
    let table = document.querySelectorAll("tbody tr");
    let allData = [];
    
    let headerCheckboxes = document.querySelectorAll('thead input[type="checkbox"]');
    let columnNames = Array.from(headerCheckboxes).map(checkbox => checkbox.name);

    for (let i = 0; i < table.length; i++) {
        let rowData = {};
        let cols = table[i].children;

        for (let j = 0; j < headerCheckboxes.length; j++) {
            let checkbox = headerCheckboxes[j];
            if (checkbox.checked) {
                rowData[columnNames[j]] = cols[j].textContent;
            }
        }

        allData.push(rowData);
    }

    document.getElementById("output").textContent = JSON.stringify(allData);
}