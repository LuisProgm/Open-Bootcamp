// EJERCICIO 07-3:

// Crea un archivo llamado fechas.js que contenga las siguientes líneas:
// - La fecha de hoy
const fechaDeHoy = new Date();
console.log(fechaDeHoy);

// - La fecha de tu nacimiento
const fechaDeNac = new Date(1998, 05, 14);
console.log(fechaDeNac);

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
let hoyEsTarde = fechaDeHoy.getTime() > fechaDeNac.getTime();
console.log(hoyEsTarde);

// - Una variable que contenga el día de tu nacimiento
let diaDeNac = fechaDeNac.getDate();
console.log(diaDeNac);

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
let mesDeNac = fechaDeNac.getMonth() + 1;
console.log(mesDeNac);

//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
let añoDeNac = fechaDeNac.getFullYear();
console.log(añoDeNac);