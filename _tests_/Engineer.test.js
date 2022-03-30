const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    test('To get Github', () => {
        const exampleTwo = new Engineer('Gaia', 154, 'gaia@gmail.com', 'https://github.Gaia2050');
        expect(exampleTwo.getGithub()).toBe('https://github.Gaia2050')
    });
    test('to get id',)
})