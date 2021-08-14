const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

const fs = require("fs");
const inquirer = require("inquirer");

function buildTeam() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "manager",
                message: "What is the team manager's name?"
            },
            {
                type: "input",
                name: "ID",
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
            },
            {
                type: "list",
                name: "add",
                message: "What would you like to do?",
                choices: [" Add an engineer", " Add an intern", " Finish building team"]
            }
        ])
        .then((response) => {
            if (response.add === response.choices[2]) {

            }
        })
}

function init() {
    buildTeam();
}

init();