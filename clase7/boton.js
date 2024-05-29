export const crearBoton=(clase, texto)=>{
    const boton= document.createElement("button");
    boton.type = 'button';
    boton.textContent=texto;
    boton.classList.add(clase);
    boton.id="btnOne";
    return boton;
}

export const crearParafo=(textoP)=>{
    const parrafo= document.createElement("p");
    parrafo.type ='parrafo';
    parrafo.textContent=textoP;
    return parrafo;

}