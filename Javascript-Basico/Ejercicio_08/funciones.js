// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"
function verdadero() {
    return true;
}

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
async function getPromise() {
    return setTimeout(() => console.log('Hola soy una promesa'), 5000);
}

getPromise();

// - Una función generadora de índices pares automáticos
function* generarPares() {
    let id = 0;
    while (true) {
        id += 2;
        yield id;
    }
}

let gen = generarPares();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());



