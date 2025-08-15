function sum(a,b) {
    let sum = a + b;
    let multiply = a * b;
    let diff = a - b;
    let div = b !== 0 ? a / b  :"divide by zaero is not allowed"
       return {
        sum: sum,
        multiply: multiply,
        difference: diff,
        division: div
    };
}
console.log(sum(5,5))
