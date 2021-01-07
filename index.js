const inquirer = require('inquirer')

const employeeRepository = []

const getManager = function() {
    return new Promise( (resolve) => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "Please enter the team manager's name:",
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
                name: 'managerEmail',
                message: "Please enter the team manager's email:",
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
                name: 'managerId',
                message: "Please enter the team manager's employee ID:",
                validate: function (input) {
                    if(isNaN(input)) {
                        return "Please enter an employee ID as a number."
                    } else {
                        return true
                    }
                }
            },
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
        ]).then( answers => resolve(answers))
    })
} 

const enterAnotherMember = function() {
    return new Promise( resolve => {
        inquirer.prompt(
            {
                type: 'confirm',
                name: 'anotherMember',
                message: "Would you like to add a team member?",
                default: false
            }
        ).then( answers => resolve(answers.anotherMember))
    })
}

enterAnotherMember().then( val => {
    console.log(val)
})