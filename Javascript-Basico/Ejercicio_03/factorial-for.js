// Ejercicio 03 :
// factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for.

let numero = 15;
let factorial = 1;

for (let i = 1; i <= numero; i++) {
    factorial *= i;
}
console.log(factorial);