const Employee = require("../lib/Employee");

// Creates card for Manager
function createManagerCard(manager) {

    return `

            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 m-3">
                <div class="card">
                    <div class="card-header">
                        <h3>${manager.name}</h3>
                        <h4><i class="bi bi-cup-fill"></i> Manager</h4>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${manager.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                    </ul>
                </div>
            </div>

    `;

} 

// Creates card for Engineer
function createEngineerCard(engineer) {

    return `

            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 m-3">
                <div class="card">
                    <div class="card-header">
                        <h3>${engineer.name}</h3>
                        <h4><i class="bi bi-laptop"></i> Engineer</h4>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${engineer.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.gitHub}" target="_blank">${engineer.gitHub}</a></li>
                    </ul>
                </div>
            </div>

    `;

}


// Creates card for Intern
function createInternCard(intern) {
    return `

            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 m-3">
                <div class="card">
                    <div class="card-header">
                        <h3>${intern.name}</h3>
                        <h4><i class="bi bi-book"></i> Intern</h4>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${intern.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                        <li class="list-group-item">School: ${intern.school}</li>
                    </ul>
                </div>
            </div>
    
    `;
}


// Function to write entire HTML file after all other pieces have been put together
function finalDocument(employeeCards) {
    return `
<!DOCTYPE html>
<html lang='en'>

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" 
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <link href='../dist/style.css' rel='stylesheet'>
    <title>My Team</title>
</head>

<body>

    <header class="bg-success bg-gradient p-5">
        <h1 class="text-center text-light">My Team</h1>
    </header>

    <main>
        <div class="container-fluid row align-items-center justify-content-center m-0 p-5">
            ${employeeCards}
        </div>
    </main>

</body>

</html>
    
    `;
}


// Function to combine all added employee cards
function generateHTML(fullTeam) {

    // Create new array of employee cards based on employee role
    const cardsArray = fullTeam.map(employee => {

        // Check role for each employee in fullTeam array using the getRole() method
        let role = employee.getRole();

        if (role === "Manager") {
            let managerCard = createManagerCard(employee);
            return managerCard;
        }

        if (role === "Engineer") {
            let engineerCard = createEngineerCard(employee);
            return engineerCard;
        }

        if (role === "Intern") {
            let internCard = createInternCard(employee);
            return internCard;
        }
    });

    const employeeCards = cardsArray.join("");

    const finishedHTML = finalDocument(employeeCards);

    return finishedHTML;
}

module.exports = generateHTML;