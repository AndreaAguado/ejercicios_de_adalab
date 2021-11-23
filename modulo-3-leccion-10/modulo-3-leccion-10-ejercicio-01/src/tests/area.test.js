import area from '../services/area';

test('when getSquareArea(3) returns 9', () => {
    const argument1 = 3;
    const result = area.getSquareArea(argument1);
    expect(result).toBe(9);
})

test('when getSquareTriangle(3,4) returns 6', () => {
    const argument1 = 3;
    const argument2 = 4;
    const result = area.getSquareTriangle(argument1, argument2);
    expect(result).toBe(6);
})