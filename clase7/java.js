import { crearEncabezado } from "./encabezado.js";
import { crearBoton, crearParafo } from "./boton.js";
const main = document.createElement("div");
//poner la clase
main.classList.add("main-navegation");
main.innerHTML= crearEncabezado();
document.body.appendChild(main);


main.appendChild(crearParafo("Hola mi nombre es wendy tatiana echeverri henao  "))

const divBoton =document.createElement("div");
document.body.appendChild(divBoton)
divBoton.appendChild(crearBoton("main-boton","Enviar"))
//busco el boton por el id 
const botonStilo = document.getElementById("btnOne");
botonStilo.style.color="red";
botonStilo.style.backgroundColor="pink";