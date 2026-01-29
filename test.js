// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 156.5 yens", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yens = fromDollarToYen(4.5);

    // Si 1 dollar son 156.5 yens, entonces 4.5 dolares debe ser (4.5 * 156.5)
    const expected = 4.5 * 156.5;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(4.5)).toBe(704.25); // 1 dollar son 156.5 yens, entonces 4.5 dollars deberían ser = (4.5 * 156.5)
})

test("One yen should be 0.87 pound", function() {
    // Importo la funcion desde app.js
    const {fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pound = fromYenToPound(4.5);

    // Si 1 yen son 0.87 pounds, entonces 4.5 yens debe ser (4.5 * 0.87)
    const expected = 4.5 * 0.87;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(4.5)).toBe(3.915); // 1 yen son 0.87 pound, entonces 4.5 yens deberían ser = (4.5 * 0.87)
})