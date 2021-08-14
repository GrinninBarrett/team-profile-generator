const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is your name?"
                }
            ])
            .then((response) => {
                this.name = response.name;
            });
    }

    getID() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "id",
                    message: "What is the employee ID?"
                }
            ])
            .then((response) => {
                this.id = response.id;
            });
    }

    getEmail() {
        inquirer
        .prompt([
            {
                type: "input",
                name: "email",
                message: "What is the employee's email address?"
            }
        ])
        .then((response) => {
            this.email = response.email;
        });
    }

    getRole() {
        return "Employee";
    }
}


module.exports = Employee;