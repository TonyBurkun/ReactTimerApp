var expect = require('expect');


describe ('App', function () {
    it ('should properly run test in describe', () => {
        expect(1).toBe(1);
    });
});

it ('should properly run test', () => {
    expect(1).toBe(1);
});