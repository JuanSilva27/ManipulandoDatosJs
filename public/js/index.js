
let main = document.querySelector("main")
let h2 = document.querySelector("h2")
let a = document.querySelector("a")
const p = document.querySelectorAll("p")
let body =document.querySelector("body")

main.style.display = "block"

const nombre = window.prompt("Ingrese su nombre")

if(nombre){
    h2.innerText += " "+ nombre
}
else{
    h2.innerText += " invitado"
}

h2.style.textTransform ="uppercase"
a.style.color ="#E51B3E"

let backgroundColor= window.confirm("¿Desea colocar un fondo de pantalla?")

if(backgroundColor){
    body.classList.toggle("fondo")
}

for(let i = 0; i<p.length;i++){
    if(i%2 === 0){
        p[i].classList.add("destacadoPar")
    }
    else{
        p[i].classList.add("destacadoImpar")
    }
}