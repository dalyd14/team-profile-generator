const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const employeeRepository = []

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
            break;
    }
}

newManager()