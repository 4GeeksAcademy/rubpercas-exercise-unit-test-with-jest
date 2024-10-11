// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollartoYen = function(valueInDollar) {
    let inputValue = valueInDollar/1.07;
    let valueInYen = inputValue * 156.5;

    return valueInYen;
}
const fromYentoPound = function(valueInYen) {
    let inputValue = valueInYen/156.5;
    let valueInPound = inputValue * 0.87;

    return valueInPound;
}
// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}


console.log(sum(7,3))


module.exports = { sum, fromEuroToDollar, fromDollartoYen, fromYentoPound };