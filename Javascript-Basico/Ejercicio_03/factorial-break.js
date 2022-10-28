// Ejercicio 03
// factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break.

let numero = 15;
let factorial = 1;
let i = 1;

while(true) {
    factorial *= i;
    i++;        
    if (i > numero) {
        break;
    }
}
console.log(factorial);