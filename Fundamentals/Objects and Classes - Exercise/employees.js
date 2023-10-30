function employees(arr) {

    class Employe {
        constructor(name) {
            this.name = name;
        }
        personalNumber() {
            console.log(`Name: ${this.name} -- Personal Number: ${this.name.length}`);
        }
    }

    let person = [];

    for (let i = 0; i < arr.length; i++) {
        let name = arr[i];
        person.push(new Employe(name));
    }

    for (let emp of person) {
        emp.personalNumber();
    }
}

employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])