const boton = document.querySelector("button")
console.log(boton);

boton.addEventListener("click", () => {
    alert("click en el botón");
})

$(() => {
    $("button").click(() => {
        console.log("Hola, estoy utilizando jQuery")
    })
})
