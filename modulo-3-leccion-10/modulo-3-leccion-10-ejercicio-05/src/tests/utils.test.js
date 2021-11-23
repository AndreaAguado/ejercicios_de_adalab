import utils from '../services/utils';

test(`paddingLeft('hola', 6, 'x') returns 'xxhola`, () => {
    const word = "hola";
    const finalSize = 6;
    const elementForFilling = "x";

    const result = utils.paddingLeft(word, finalSize, elementForFilling);
    expect(result).toBe("xxhola");

})