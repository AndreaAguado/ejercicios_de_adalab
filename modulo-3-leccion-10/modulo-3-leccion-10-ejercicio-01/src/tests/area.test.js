import area from '../services/area';

test('when getSquareArea(3) returns 9', () => {
    const argument1 = 3;
    const result = area.getSquareArea(argument1);
    expect(result).toBe(9);
})