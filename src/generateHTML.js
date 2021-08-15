// Creates card for Manager
const managerCard = `

<div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 m-3">
    <div class="card">
        <div class="card-header">
            <h3>${manager.name}</h3>
            <h4><i class="bi bi-cup-fill"></i>Manager</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: ${manager.email}</li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
    </div>
</div>

`;

// Creates card for Engineer
const engineerCard = `

<div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 m-3">
    <div class="card">
        <div class="card-header">
            <h3>${engineer.name}</h3>
            <h4><i class="bi bi-laptop"></i>Engineer</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: ${engineer.email}</li>
            <li class="list-group-item">GitHub: ${engineer.gitHub}</li>
        </ul>
    </div>
</div>

`;


// Creates card for Intern
const internCard = `

<div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 m-3">
    <div class="card">
        <div class="card-header">
            <h3>${intern.name}</h3>
            <h4><i class="bi bi-book"></i>Intern</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: ${intern.email}</li>
            <li class="list-group-item">School: ${intern.school}</li>
        </ul>
    </div>
</div>

`;


// Writes entire HTML file after all other pieces have been put together
const finalDocument = `

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
            
        </div>
    </main>


</body>

</html>
`;

// TODO: Update this file with template literals of card elements for each employee type
// as well as a function to actually write the HTML (one card per employee) based on employee type,
// perhaps looping through the array of all team members, checking role using the getRole()
// method for each employee, and writing the HTML based on the role returned

// I wonder if the filter() method could be good to use here ^ 

// There will need to be another function to hold all non-card HTML, using a template literal
// to add cards of employees in the appropriate place. I think it might be best to make an array of all needed cards,
// then join them into a string as one variable, then add that into the overall HTML file.


module.exports = finalDocument;