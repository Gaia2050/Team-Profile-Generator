const Manager = require('../lib/Manager');

describe('Manager', () => {
    test('Test to get name', () => {
        const exampleTwo = new Manager('John', 123, 'john@gmail.com', 1793);
        expect(exampleTwo.getName()).toBe('John');
    });
    // test('to get id', () => {
    //     const exampleTwo = new Manager('Jordan', 456, 'jordan@gmail.com', 01223);
    //     expect(exampleTwo.getId()).toBe(456);
    // });
    test('to get email', () => {
        const exampleTwo = new Manager('Jason', 789, 'jason@gmail.com', 1993);
        expect(exampleTwo.getEmail()).toBe('jason@gmail.com');
    });
    test('to get office number', () => {
        const exampleTwo = new Manager('Nick', 124, 'nick@gmail.com', 1783);
        expect(exampleTwo.getofficeNumber()).toBe(1783);
    });
    test('to get role', () => {
        const exampleTwo = new Manager('Nick', 124, 'nick@gmail.com', 1783);
        expect(exampleTwo.getRole()).toBe('Manager');
    });
})