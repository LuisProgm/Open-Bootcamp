const parrafo = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion")
const papelera = document.querySelector(".papelera")

parrafo.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log("Estoy arrastrando el parrafo: " + parrafo.innerText);
        parrafo.classList.add("dragging");
        event.dataTransfer.setData("id", parrafo.id);
        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma,0 ,0);
    })
    
    parrafo.addEventListener("dragend", () => {
        parrafo.classList.remove("dragging");
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy";
    })

    seccion.addEventListener("drop", event => {
        const id_parrafo = event.dataTransfer.getData("id");
        const parrafo = document.getElementById(id_parrafo);
        seccion.appendChild(parrafo)
    })
})

papelera.addEventListener("dragover", event => {
    event.preventDefault();
})

papelera.addEventListener("drop", event => {
    const id = event.dataTransfer.getData("id");
    document.getElementById(id).remove();
})