// EJERCICIO 07-1:

// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas:
// - Un nuevo Set con los nombres de tu familia
const family = ["Luis", "Diana", "Andrés", "Diego", "Susana", "Alexandra"];
const setFamily = new Set(family);

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
setFamily.add("Luis");
console.log(setFamily);

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
setFamily.add("Javascript");
console.log(setFamily);