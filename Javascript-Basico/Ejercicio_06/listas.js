// EJERCICIO 06:

// Crea un archivo JS que contenga las siguientes líneas
// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
    let lista = ['Leche', 'Arroz', 'Harina', 'Huevos', 'Cereales'];

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
    lista.push('Aceite de Girasol');
    console.log(lista);

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
    lista.pop();
    console.log(lista);

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
    const movies = [
        {
        titulo: 'Cadena Perpetua', 
        director: 'Frank Darabont', 
        fecha: new Date(1995, 01, 24)
        },
        {
        titulo: 'Drive my car', 
        director: 'Ryūsuke Hamaguchi', 
        fecha: new Date(2021, 07, 20)
        },
        {
        titulo: 'The Truman Show', 
        director: 'Peter Weir', 
        fecha: new Date(1998, 05, 05)
        } 
    ];
    
// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
    const pelisPost = movies.filter(obj => obj.fecha > new Date(2010, 0, 1));
    console.log(pelisPost);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
    const directores = movies.map(obj => obj.director);
    console.log(directores);

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
    const titulos = movies.map(obj => obj.titulo);
    console.log(titulos);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
    const concat = directores.concat(titulos);
    console.log(concat);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
    const concat2 = [...directores, ...titulos];
    console.log(concat2);