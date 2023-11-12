function companyUsers(arr) {

    let obj = {};

    for (let company of arr) {
        let [firm, id] = company.split(' -> ');
        if (!obj.hasOwnProperty(firm)) {
            obj[firm] = new Set();
        }
        obj[firm].add(id);
    }

    let sorted = Object.entries(obj);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (let element of sorted) {
        console.log(element[0]);
        for (let number of element[1]) {
            console.log(`-- ${number}`);
        }
    }
}

companyUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345'])