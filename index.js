const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const fs = require('fs')

// this array will hold all of the team members
const employeeRepository = []
/*
    new Manager('Brian Spears', 'bs@gmail.com', 78, 41),
    new Engineer('David Daly', 'dd@gmail.com', 45, 'dalyd14'),
    new Engineer('PJ Taya', 'PT@gmail.com', 63, 'pj13'),
    new Engineer('Michel Skura', 'skuyra@gmail.com', 53, 'ms13'),
    new Intern('Matt Nutley', 'mn@gmail.com', 48, 'Alabama')
*/

/////////////////////////////////////////////////////////////////////////////////////////////
// The following code is the logic that will facilitate the input of
// the team member information
/////////////////////////////////////////////////////////////////////////////////////////////

// these 4 functions hold the inquirer code to ask for the inputs from the user
const enterEmployee = () => {
    return new Promise( (resolve) => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'employeeName',
                message: "Please enter the employee's name:",
                validate: function (input) {
                    if(input === '') {
                        return "Please enter the manager's name."
                    } else {
                        return true
                    }
                }
            },
            {
                type: 'input',
                name: 'employeeEmail',
                message: "Please enter the employee's email:",
                validate: function (input) {
                    if(input === '' || !input.includes('@')) {
                        return "Please enter a valid email."
                    } else {
                        return true
                    }
                }
            },
            {
                type: 'number',
                name: 'employeeId',
                message: "Please enter the employee's ID:",
                validate: function (input) {
                    if(isNaN(input)) {
                        return "Please enter an employee ID as a number."
                    } else if (employeeRepository.some(emp => emp.getId() === input)) {
                        return "This number is already taken! Please enter a unique employee ID."
                    } else {
                        return true
                    }
                }
            }
        ]).then( answers => {
            resolve(answers)
        })
    })
}
const enterManager = () => {
    return new Promise( (resolve) => {
        inquirer.prompt(
            {
                type: 'number',
                name: 'managerOffice',
                message: "Please enter the team manager's office number:",
                validate: function (input) {
                    if(isNaN(input)) {
                        return "Please enter an office number as a number."
                    } else {
                        return true
                    }
                }
            }
        ).then( answers => resolve(answers))
    })
}
const enterEngineer = () => {
    return new Promise( (resolve) => {
        inquirer.prompt(
            {
                type: 'input',
                name: 'engineerGithub',
                message: "Please enter the engineer's GitHub username:",
                validate: function (input) {
                    if(input === '') {
                        return "Enter the engineer's GitHub username."
                    } else {
                        return true
                    }
                }
            }
        ).then( answers => resolve(answers))
    })
}
const enterIntern = () => {
    return new Promise( (resolve) => {
        inquirer.prompt(
            {
                type: 'input',
                name: 'internSchool',
                message: "Please enter the intern's school name:",
                validate: function (input) {
                    if(input === '') {
                        return "Enter the intern's school name."
                    } else {
                        return true
                    }
                }
            }
        ).then( answers => resolve(answers))
    })
}
// the following 3 functions will create the employee objects
const newManager = () => {
    console.log('Enter information about the Manager:')
    enterEmployee().then( empVal => {
        enterManager().then( manVal => {
            const manager = new Manager(empVal.employeeName, empVal.employeeEmail, empVal.employeeId, manVal.managerOffice)
            employeeRepository.push(manager)
            enterAnotherMember().then( answer => nextMember(answer))
        })
    })
}
const newEngineer = () => {
    console.log('Enter information about the Engineer:')
    enterEmployee().then( empVal => {
        enterEngineer().then( engVal => {
            const engineer = new Engineer(empVal.employeeName, empVal.employeeEmail, empVal.employeeId, engVal.engineerGithub)
            employeeRepository.push(engineer)
            enterAnotherMember().then( answer => nextMember(answer))
        })
    })
}
const newIntern = () => {
    console.log('Enter information about the Intern:')
    enterEmployee().then( empVal => {
        enterIntern().then( intVal => {
            const intern = new Intern(empVal.employeeName, empVal.employeeEmail, empVal.employeeId, intVal.internSchool)
            employeeRepository.push(intern)
            enterAnotherMember().then( answer => nextMember(answer))
        })
    })
}
// these two functions act as the logic for whether or not the user wants to add another member
const enterAnotherMember = () => {
    return new Promise( resolve => {
        inquirer.prompt(
            {
                type: 'list',
                name: 'anotherMember',
                message: "Pick the team member you would like to add.",
                choices: ['Engineer', 'Intern', 'I am done adding members']
            }
        ).then( answers => resolve(answers.anotherMember))
    })
}
const nextMember = (answer) => {
    switch (answer) {
        case 'Engineer':
            newEngineer()
            break;
        case 'Intern':
            newIntern()
            break;
        case 'I am done adding members':
        default:
            createHTML(employeeRepository)
            break;
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////
// The following code is the logic that will create the HTML
/////////////////////////////////////////////////////////////////////////////////////////////
const createHTML = membersList => {
    let htmlString = []

    membersList.forEach(member => {
        const memberCard = `
        <div class="card">
            <div class="card-body bg-primary text-white">
                <h5 class="card-title">${member.getName()}</h5>
                <p class="card-text">${getIcon(member)} ${member.getRole()}</p>
            </div>
            <div class="content-background">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${member.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: ${getThirdDetail(member)}</li>
                </ul>
            </div>
        </div>`
        htmlString.push(memberCard)
    });

    htmlString.push(`    
    </section>
</body>
</html>`)

    fileManagement(htmlString)
}
const getIcon = (member) => {
    switch (member.getRole()) {
        case "Manager":
            return `<i class="fas fa-mug-hot"></i>`
        case "Engineer":
            return `<i class="fas fa-tools"></i>`
        case "Intern":
            return `<i class="fas fa-user-graduate"></i>`
        default:
            break;
    }
}
const getThirdDetail = (member) => {
    switch (member.getRole()) {
        case "Manager":
            return member.getOfficeNumber()
        case "Engineer":
            return `<a href="https://github.com/${member.getGithub()}" target="_blank">${member.getGithub()}</a>`
        case "Intern":
            return member.getSchool()
        default:
            break;
    }
}
const fileManagement = htmlArr => {
    fs.copyFile('./src/index.html', './dist/index.html', err => {
        if (err) throw err
        fs.appendFile('./dist/index.html', htmlArr.join(''), err => {
            if (err) throw err
        })              
    })
}

// this starts the code by receiving input for the manager
newManager()
// createHTML(employeeRepository)