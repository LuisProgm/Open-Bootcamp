let nombre = "Luis";
let apellido = "Condori";

const persona = {
    nombre,
    apellido
}

//sessionStorage.setItem("persona", JSON.stringify(persona));

//localStorage.setItem("persona", JSON.stringify(persona));

const hora_actual = new Date();

//document.cookie = `persona=${JSON.stringify(persona)};expires=${new Date(hora_actual.getTime() + 2 * 60000)}`

//console.log(document.cookie)