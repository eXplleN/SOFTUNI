class Company {

    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        let check = [name, salary, position, department];

        if (check.includes("") || check.includes(undefined) || check.includes(null)) {
            throw new Error("Invalid input!");
        }

        if (salary < 0) {
            throw new Error("Invalid input!");
        }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        }

        this.departments[department].push({ name: name, salary: salary, position: position });

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDepartmentName = null;
        let highestAverageSalary = 0;

        for (let department in this.departments) {
            let totalSalary = 0;
            let departmentEmployees = this.departments[department];
            for (let employee of departmentEmployees) {
                totalSalary += employee.salary;
            }
            let averageSalary = totalSalary / departmentEmployees.length;
            if (averageSalary > highestAverageSalary) {
                highestAverageSalary = averageSalary;
                bestDepartmentName = department;
            }
        }

        if (bestDepartmentName !== null) {
            let employees = this.departments[bestDepartmentName].sort((a, b) => {
                if (b.salary !== a.salary) {
                    return b.salary - a.salary;
                } else {
                    return a.name.localeCompare(b.name);
                }
            });

            let result = `Best Department is: ${bestDepartmentName}\n`;
            result += `Average salary: ${highestAverageSalary.toFixed(2)}\n`;
            for (let i = 0; i < employees.length; i++) {
                let employee = employees[i];
                result += `${employee.name} ${employee.salary} ${employee.position}`;
                if (i !== employees.length - 1) {
                    result += '\n'; 
                }
            }
            return result;
        } else {
            return "No employees in the company yet.";
        }
    }
}
let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());