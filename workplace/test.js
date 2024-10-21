test("1 euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');
    let inputValue = 1;
    if (typeof inputValue != "number") {
        throw new Error("Invalid input: Please enter a valid number. (In this example, it has to be 1)");
      }

    const dollars = fromEuroToDollar(1);
    const expected = 1.07;

    expect(dollars).toBe(expected);
})
test("1.07 dollars should be 156.5 yens", function() {
    const { fromDollartoYen } = require('./app.js');
    const yens = fromDollartoYen(1.07);
    const expected = 156.5;

    expect(yens).toBe(expected); 
})
test("156.5 Yens should be 0.87 pounds", function() {
    const { fromYentoPound } = require('./app.js');
    const pounds = fromYentoPound(156.5);   
    const expected = 0.87;

    expect(pounds).toBe(expected); 
})