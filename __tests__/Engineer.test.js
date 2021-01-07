const Engineer = require('../lib/Engineer')

test('creates engineer object', () => {
    const engineer = new Engineer('Dave', 'dalyd14@gmail.com', 1, 'dalyd14')

    expect(engineer.name).toBe('Dave')
    expect(engineer.email).toBe('dalyd14@gmail.com')
    expect(engineer.id).toBe(1)
    expect(engineer.github).toBe('dalyd14')
})

test('get values returned from engineer class', () => {
    const engineer = new Engineer('Dave', 'dalyd14@gmail.com', 1, 'dalyd14')

    expect(engineer.getName()).toBe('Dave')
    expect(engineer.getEmail()).toBe('dalyd14@gmail.com')
    expect(engineer.getId()).toBe(1)
    expect(engineer.getGithub()).toBe('dalyd14')
    expect(engineer.getRole()).toBe('Engineer')
})