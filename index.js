const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const fs = require("fs");
const inquirer = require("inquirer");
const { inherits } = require("util");

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

// TODO: Add function to add employee based on role or exit (finish and write HTML file)



// This init function was made to simply follow convention - using a more appropriately-named
// function - addManager() - is to help with clarity
function init() {
    addManager();
}

init();