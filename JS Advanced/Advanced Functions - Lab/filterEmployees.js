function filterEmployees(data, criteria) {

    let inputAsArr = JSON.parse(data);
    let result = [];

    for (let person of inputAsArr) {
        let [searchKey, value] = criteria.split("-");
        let { id, first_name, last_name, email, gender } = person;
        let keyToFind = searchKey;
        let foundKeyValue = person[keyToFind];

        if (foundKeyValue === value) {
            result.push({
                name: first_name,
                lastName: last_name,
                mail: email
            });
        }
    }

    let count = 0;
    for (let prsn of result) {
        let { name, lastName, mail } = prsn;
        console.log(`${count}. ${name} ${lastName} - ${mail}`);
        count++;
    }
}

filterEmployees(`[{

    "id": "1",
    
    "first_name": "Ardine",
    
    "last_name": "Bassam",
    
    "email": "abassam0@cnn.com",
    
    "gender": "Female"
    
    }, {
    
    "id": "2",
    
    "first_name": "Kizzee",
    
    "last_name": "Jost",
    
    "email": "kjost1@forbes.com",
    
    "gender": "Female"
    
    },
    
    {
    
    "id": "3",
    
    "first_name": "Evanne",
    
    "last_name": "Maldin",
    
    "email": "emaldin2@hostgator.com",
    
    "gender": "Male"
    
    }]`,

    'gender-Female')