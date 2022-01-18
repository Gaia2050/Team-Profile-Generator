const Manager = require('./lib/Manager');

describe('Manager', () => {
    test('Test to get name', () => {
        const exampleTwo = new Manager('John', 123, 'john@gmail.com', 1793);
        expect(exampleTwo.getName()).toBe('John');
    });
    test('to get id', () => {
        const exampleTwo = new Manager('John', 123, 'john@gmail.com', 1793);
        expect(exampleTwo.getId()).toBe(123);
    });
    test('to get email', () => {
        const exampleTwo = new Manager('John', 123, 'john@gmail.com', 1793);
        expect(exampleTwo.getEmail()).toBe('john@gmail.com');
    });
    test('to get office number', () => {
        const exampleTwo = new Manager('John', 123, 'john@gmail.com', 1793);
        expect(exampleTwo.getOfficeNumber()).toBe(1793);
    });
    test('to get role', () => {
        const exampleTwo = new Manager('John', 123, 'john@gmail.com', 1793);
        expect(exampleTwo.getRole()).toBe('Manager');
    });
})