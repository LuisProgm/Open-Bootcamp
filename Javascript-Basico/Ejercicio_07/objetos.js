// EJERCICIO 07-2:

// Crea un archivo llamado objetos.js que contenga las siguientes líneas:
// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const obj = {
    nombre: 'Luis',
    apellido: 'Condori',
    edad: 24,
    altura: 1.78,
    eresDesarrollador: true
};

// - Una variable que obtenga tu edad a partir del objeto anterior
let edad = obj.edad;

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
let lista = [
    {
        ...obj
    }, 
    {
    nombre: 'Joel',
    apellido: 'Contreras',
    edad: 27,
    altura: 1.68,
    eresDesarrollador: true
    },
    {
    nombre: 'Matias',
    apellido: 'Igañez',
    edad: 21,
    altura: 1.72,
    eresDesarrollador: false
    }
];

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
let nuevaLista = lista.sort((a, b) => b.edad - a.edad);
console.log(nuevaLista);