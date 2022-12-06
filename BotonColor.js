const boton = document.querySelector("#cambiarColor")

boton.addEventListener("click",()=>
    {
        let aleatorio1= Math.floor(Math.random() * (255+1-0) + 0);
        let aleatorio2= Math.floor(Math.random() * (255+1-0) + 0);
        let aleatorio3= Math.floor(Math.random() * (255+1-0) + 0);
        let aleatorio4= Math.floor(Math.random() * (255+1-0) + 0);
        document.getElementById("miDiv").style.backgroundColor=`rgba(${aleatorio1}, ${aleatorio2}, ${aleatorio3}, ${aleatorio4})`
    })


