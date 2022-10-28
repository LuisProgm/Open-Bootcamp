// Ejercicio 03
// factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while.

let numero = 15; 
let factorial = 1;
let i = 1;

while(i <= numero) {
    factorial *= i;
    i++;
}
console.log(factorial);