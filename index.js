// Import helper code which creates HTML code
const generateHTML = require("./src/generateHTML");

// Import subclasses of Employee class
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Import node modules
const fs = require("fs");
const inquirer = require("inquirer");

// Create empty array to hold all team members
let fullTeam = [];

// Upon starting the application, add a manager
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
            // Destructuring assignment of variables from manager info 
            const  { name, id, email, officeNumber } = response;
            
            // Create new Manager class
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