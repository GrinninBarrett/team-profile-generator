const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const fs = require("fs");
const inquirer = require("inquirer");

function init() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "manager",
                message: "What is the team manager's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the manager's employee ID?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the manager's email address?"
            },
            {
                type: "input",
                name: "office",
                message: "What is the manager's office number?"
            }
        ])
        .then((response) => {
            const manager = new Manager(response.manager.trim(), response.id.trim(), response.email.trim(), response.office.trim());
            console.log(manager);
            console.log(manager.getRole())
        })

}

init();


