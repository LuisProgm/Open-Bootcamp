// Crea un nuevo fichero JS que contenga las siguientes líneas

// - Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
// - Ejecuta la depuración de VSCode para visualizar la ejecución de la función                                                                                   0  1  2  3  4  5

function fibonacci(num) {
    let numeros = [1, 1];

    if (num === 0) return null;
    if (num === 1) return [1];

    for (let i = 2; i < num; i++) {
        let suma = numeros[i - 1] + numeros[i - 2];
        numeros.push(suma);
    }
    return numeros;
}
console.log(fibonacci(12))