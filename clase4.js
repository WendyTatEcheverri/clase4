//Arreglos(Arrys)
let numeros =[10,34,1,100,35.9]
//Cualquier tipo de dato
const varios=["Wendy",true,10,null,3.1]
console.log(numeros);
console.log(varios[0]);
console.log(varios.length);
//Agrego al final
numeros.push("Colombia")
console.log(numeros);
//Quito uno 
numeros.pop()
console.log(numeros);
//Poner al inicio
numeros.unshift("Brasil")
console.log(numeros);
//quitar al primero
numeros.shift()
console.log(numeros)

//metodos pra arreglos
//1. reduce
let reducido= numeros.reduce((acumulador,valorActual)=>{
    return acumulador+valorActual
})

console.log(reducido)
//2. filter()
let filtrado= numeros.filter(dato=>{
    return dato >10
})
console.log(filtrado);
 
let strings =["Colombia", "Brasil", "Comoros", "Conection"]
console.log(strings.filter(dato=>{
    return dato.startsWith("Co")
}));

//3. map
let mapeo = strings.map(pais =>{
    return pais.concat("Hola")
})
console.log(mapeo);

let mapped =numeros.map(numero=>{
    return Math.pow(numero,2)
})
console.log(mapped);

numeros.forEach(numero=>{
    console.log(numero)
})