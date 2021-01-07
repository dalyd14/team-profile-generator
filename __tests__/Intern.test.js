const Intern = require('../lib/Intern')

test('create an intern object', () => {
    const intern = new Intern('Dave', 'dalyd14@gmail.com', 1, 'Clemson University')

    expect(intern.name).toBe('Dave')
    expect(intern.email).toBe('dalyd14@gmail.com')
    expect(intern.id).toBe(1)
    expect(intern.school).toBe('Clemson University')
})

test('get values returned from intern class', () => {
    const intern = new Intern('Dave', 'dalyd14@gmail.com', 1, 'Clemson University')

    expect(intern.getName()).toBe('Dave')
    expect(intern.getEmail()).toBe('dalyd14@gmail.com')
    expect(intern.getId()).toBe(1)
    expect(intern.getSchool()).toBe('Clemson University')
    expect(intern.getRole()).toBe('Intern')
})