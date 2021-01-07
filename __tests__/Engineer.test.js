const Engineer = require('../lib/Engineer')

test('creates engineer object', () => {
    const engineer = new Engineer('Dave', 'dalyd14@gmail.com', 1, 'dalyd14')

    expect(engineer.name).toBe('Dave')
    expect(engineer.email).toBe('dalyd14@gmail.com')
    expect(engineer.id).toBe(1)
    expect(engineer.github).toBe('dalyd14')
})