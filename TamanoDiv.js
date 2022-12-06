
let nuevoDiv = document.getElementById("miDiv")


function cambiarTamano(){

    const ancho = nuevoDiv.offsetWidth
    const altura = nuevoDiv.offsetHeight

    nuevoDiv.style.width = ancho/2 + "px"
    nuevoDiv.style.height = altura/2 + "px"
}