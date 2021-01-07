const Intern = require('../lib/Intern')

test('create an intern object', () => {
    const intern = new Intern('Dave', 'dalyd14@gmail.com', 1, 'Clemson University')

    expect(intern.name).toBe('Dave')
    expect(intern.email).toBe('dalyd14@gmail.com')
    expect(intern.id).toBe(1)
    expect(intern.school).toBe('Clemson University')
})

test('get values returned from intern class', () => {
    const employee = new Intern('Dave', 'dalyd14@gmail.com', 1, 'Clemson University')

    expect(employee.getName()).toBe('Dave')
    expect(employee.getEmail()).toBe('dalyd14@gmail.com')
    expect(employee.getId()).toBe(1)
    expect(employee.getSchool()).toBe('Clemson University')
    expect(employee.getRole()).toBe('Intern')
})