const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const fs = require("fs");
const inquirer = require("inquirer");

let fullTeam = [];

function addManager() {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
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
                name: "officeNumber",
                message: "What is the manager's office number?"
            }
        ])
        .then((response) => {
            const  { name, id, email, officeNumber } = response;
            const manager = new Manager (name, id, email, officeNumber);
            console.log(manager);
            fullTeam.push(manager);
            console.log(fullTeam);
        })
}


addManager();
