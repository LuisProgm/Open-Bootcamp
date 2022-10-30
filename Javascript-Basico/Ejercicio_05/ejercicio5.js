// EJERCICIO 05:

// Crea un archivo JS que contenga las siguientes líneas
// - Una variable que contenga tu altura en centímetros (entero)
let altura_cm = 178;

// - Una variable que contenga tu altura en metros (número de coma flotante)
let altura_m = 1.78;

// - Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso_kg = 81.22;

// - Una variable que contenga tu altura en metros redondeada hacia arriba
let altura_redn = Math.ceil(altura_m);
console.log(altura_redn);

// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let peso_redn = Math.floor(peso_kg);
console.log(peso_redn);

// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let igual = Number.MAX_VALUE + 1 === Number.MAX_VALUE;
console.log(igual) 