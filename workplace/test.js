test("1 euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
test("1.07 dollars should be 156.5 yens", function() {
    const { fromDollartoYen } = require('./app.js');
    const yens = fromDollartoYen(1.07);
    const expected = 156.5;

    expect(fromDollartoYen(1.07)).toBe(156.5); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
test("156.5 Yens should be 0.87 pounds", function() {
    const { fromYentoPound } = require('./app.js');
    const pounds = fromYentoPound(156.5);   
    const expected = 0.87;

    expect(fromYentoPound(156.5)).toBe(0.87); 
})