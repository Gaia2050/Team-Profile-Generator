
const Employee = require('../lib/Employee');

describe('Employee',()=> {
    test('Test to get name', ()=> {
        const exampleOne = new Employee('Erick', 123, 'erick@gmail.com');
        expect(exampleOne.getName()).toBe('Erick');

    });
    test('test to get id',() => {
        const exampleOne = new Employee('Josh', 456, 'josh@gmail.com');
        expect(exampleOne.getId()).toBe(456);
    });
    test('test to get email', () => {
        const exampleOne = new Employee('Tiana', 789, 'tiana@gmail.com');
        expect(exampleOne.getEmail()).toBe('tiana@gmail.com');
    });
    test('test to get role', () => {
        const exampleOne = new Employee('Tiana', 789, 'tiana@gmail.com');
        expect(exampleOne.getRole()).toBe('Employee');
    });

})
