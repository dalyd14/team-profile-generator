const Employee = require('../lib/Employee')

test('creates a new employee object', () => {
    const employee = new Employee('Dave', 'dalyd14@gmail.com', 1)

    expect(employee.name).toBe('Dave')
    expect(employee.email).toBe('dalyd14@gmail.com')
    expect(employee.id).toBe(1)
})

test('get values returned from employee class', () => {
    const employee = new Employee('Dave', 'dalyd14@gmail.com', 1)

    expect(employee.getName()).toBe('Dave')
    expect(employee.getEmail()).toBe('dalyd14@gmail.com')
    expect(employee.getId()).toBe(1)
    expect(employee.getRole()).toBe('Employee')
})