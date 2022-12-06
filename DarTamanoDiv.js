function asignarTamano(){
    const altura = document.getElementById("Altura").value
    const ancho = document.getElementById("Ancho").value
    let nDiv = document.getElementById("miDiv")

   nDiv.style.height = altura + "px"
   nDiv.style.width = ancho + "px"

}