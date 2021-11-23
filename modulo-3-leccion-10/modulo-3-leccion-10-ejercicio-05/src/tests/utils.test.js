import utils from '../services/utils';

test(`paddingLeft('hola', 6, 'x') returns 'xxhola'`, () => {
    const word = "hola";
    const finalSize = 6;
    const elementForFilling = "x";

    const result = utils.paddingLeft(word, finalSize, elementForFilling);
    expect(result).toBe("xxhola");

})

test(`paddingLeft('hola', 6, 'a') devuelve 'aahola'`, () => {
    const word = "hola";
    const finalSize = 6;
    const elementForFilling = "a";

    const result = utils.paddingLeft(word, finalSize, elementForFilling);
    expect(result).toBe("aahola");
})

test(`paddingLeft('ee', 4, 'aa') devuelve 'aaee'`, () => {
    const word = "ee";
    const finalSize = 4;
    const elementForFilling = "aa";
    const result = utils.paddingLeft(word, finalSize, elementForFilling);
    expect(result).toBe("aaee");
})

test(`paddingLeft('xxxx', 6, 'x') devuelve 'xxxxxx'`, () => {
    const word = "xxxx";
    const finalSize = 6;
    const elementForFilling = "x";

    const result = utils.paddingLeft(word, finalSize, elementForFilling);

    expect(result).toBe("xxxxxx");
})

test(`paddingLeft('', 6, 'x') devuelve 'xxxxxx'`, () => {
    const word = "";
    const finalSize = 6;
    const elementForFilling = "x";

    const result = utils.paddingLeft(word, finalSize, elementForFilling);

    expect(result).toBe("xxxxxx")
})

test(`paddingLeft('hola mi amigo', 6, 'x') devuelve 'hola mi amigo'`, () => {
    const text = "hola mi amigo";
    const finalSize = 6;
    const elementForFilling = "x";

    const result = utils.paddingLeft(text, finalSize, elementForFilling);

    expect(result).toBe("hola mi amigo");
})

test(`paddingLeft('xxxx', 0, 'x') devuelve 'xxxx'`, () => {
    const word = "xxxx";
    const finalSize = 0;
    const elementForFilling = "x";

    const result = utils.paddingLeft(word, finalSize, elementForFilling);

    expect(result).toBe("xxxx");
})