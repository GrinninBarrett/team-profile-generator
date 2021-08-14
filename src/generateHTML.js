const template = `

<!DOCTYPE html>
<html lang='en'>

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" 
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link href='../dist/style.css' rel='stylesheet'>
    <title>My Team</title>
</head>

<body>

    <header class="bg-success bg-gradient p-5">
        <h1 class="text-center text-light">My Team</h1>
    </header>

    <main>
        <div class="container-fluid row align-items-center justify-content-center m-0 p-5">
            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 m-3">
                <div class="card">
                    <div class="card-header">
                        <h3>${employeeName}</h3>
                        <h5>${employeeTitle}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${employeeID}</li>
                        <li class="list-group-item">Email: ${employeeEmail}</li>
                        <li class="list-group-item">Office Number / GitHub / School</li>
                    </ul>
                </div>
            </div>
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