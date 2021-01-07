const Manager = require('../lib/Manager')

test('creates manager object', () => {
    const manager = new Manager('Dave', 'dalyd14@gmail.com', 1, 2)

    expect(manager.name).toBe('Dave')
    expect(manager.email).toBe('dalyd14@gmail.com')
    expect(manager.id).toBe(1)
    expect(manager.officeNumber).toBe(2)
})

test('get values returned from manager class', () => {
    const manager = new Manager('Dave', 'dalyd14@gmail.com', 1, 2)

    expect(manager.getName()).toBe('Dave')
    expect(manager.getEmail()).toBe('dalyd14@gmail.com')
    expect(manager.getId()).toBe(1)
    expect(manager.getOfficeNumber()).toBe(2)
    expect(manager.getRole()).toBe('Manager')
})