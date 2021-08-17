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
            },
            {
                type: "confirm",
                name: "addAnother",
                message: "Would you like to add another employee?"
            }
        ])
        .then((response) => {
            // Destructuring assignment of variables from manager info 
            const  { name, id, email, officeNumber, addAnother } = response;
            
            // Create new Manager class
            const manager = new Manager (name, id, email, officeNumber);

            fullTeam.push(manager);

            if (addAnother) {
                return addEmployee();
            }
        })
}


// Add employees until Manager exits application
function addEmployee() {
    return inquirer
        .prompt([
            {
                type: "list",
                name: "role",
                message: "What is the employee's role?",
                choices: ["Engineer", "Intern"]
            },
            {
                type: "input",
                name: "name",
                message: "What is the employee's name?", 
            },
            {
                type: "input",
                name: "id",
                message: "What is the employee's ID?",
            },
            {
                type: "input",
                name: "email",
                message: "What is the employee's email address?",
            },
            {
                type: "input",
                name: "gitHub",
                message: "What is the engineer's GitHub username?",
                when: (input) => input.role === "Engineer",
            },
            {
                type: "input",
                name: "school",
                message: "What is the name of the intern’s school?",
                when: (input) => input.role === "Intern",
            },
            {
                type: "confirm",
                name: "addAnotherEmployee",
                message: "Would you like to add another employee?",
                default: false
            }
        ])
        .then((response) => {    

            // Destructuring assignment of variables from adding an employee
            const { name, id, email, role, gitHub, school, addAnotherEmployee } = response; 
            let employee; 
    
            // Create new instance of subclasses based on their role
            if (role === "Engineer") {
                employee = new Engineer (name, id, email, gitHub);    
            } else if (role === "Intern") {
                employee = new Intern (name, id, email, school);
            }
    
            // Push the added employee to the fullTeam array
            fullTeam.push(employee); 
    
            // Run again if the manager wants to add more employees, return completed array if not
            if (addAnotherEmployee) {
                return addEmployee();
            }

            return fullTeam;
        })
}

function writeFile(html) {
    fs.writeFile("./dist/index.html", html, err => {
        err ? console.error(err) : console.log("Team profile has been created! Check out the index.html file.")
    });
}


// Upon starting the application run the appropriate functions until ending
async function init() {
    console.log(`
    ===================================================
    Please build your team by first adding the manager.
    ===================================================
    `)
    await addManager()
    
    const html = generateHTML(fullTeam);
    writeFile(html);
}

init();