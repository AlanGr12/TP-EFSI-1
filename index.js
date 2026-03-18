//ejercicio 1
function formatearNombre(nombre){
    let nombreMinuscula = nombre.slice(1).toLowerCase();
    let nombreMayuscula = nombre[0].toUpperCase();
    return `${nombreMayuscula}${nombreMinuscula}`
}

//ejercicio 2
function contarLetras(texto){
let contarTexto = texto.replace(/ /g,"").length;
return contarTexto;
}

//ejercicio 3
function maxNumero(a,b,c){
if(a > b && a > c){
    return a;
}else if( b > a && b > c){
    return b;
}
else if(c > a && c > b){
    return c;
}
}

//ejercicio 4
function validarPassword(password){
    if(password.length >= 8 ){
    for(let i = 0; i < password.length; i++){
    for(let j = 0; i < 10; j++){
    if(password[i] === j){
        return true;
    }
}
}
}

    return false
}

console.log(validarPassword("jhgadh1hdh"))

//ejercicio 5
function sumaArray(numeros){
let listaNumeros = 0;
for(let i = 0; i < numeros.length; i++){
    listaNumeros = listaNumeros + numeros[i]
}

return listaNumeros
}

//ejercicio 6

function mayorNumero(numeros){
let numeroMayor = 0;
for(let i = 0; i < numeros.length; i++){
    if(numeroMayor < numeros[i]){
        numeroMayor = numeros[i];
    }
}
return numeroMayor;
}

//ejercicio 7

function obtenerPares(numeros){
let numerosPares = [];
for (let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0){
        numerosPares.push(numeros[i])
    }
}
return numerosPares;
}

//ejercicio 8

function descripcionUsuario(usuario){

let descUser = `${usuario.nombre} tiene ${usuario.edad} años`

return descUser
}

//ejercicio 9

function activarUsuario(usuario){
    usuario.activo = true
}

//ejercicio 10


function calcularPrecio(productos){
let precioTotal = 0;
for(let i = 0; i < productos.length; i++){
    precioTotal += productos[i].precio;
}

return precioTotal;
}


//ejercicio 11

function nombresUsuarios(usuarios){

let nombreUsuarios = usuarios.map(e => e.nombre)

return nombreUsuarios;

}

//ejercicio 12

function usuariosMay(usuarios){

    let usuariosMayore = usuarios.filter(e => e.edad >= 18)

    return usuariosMayore

}

//ejercicio 13

function sumaEdades(usuarios){

    let edades = usuarios.reduce((total,edad) => total + edad, 0)

    return edades

}

//ejercicio 14 no lo vimos

function extraerVar(productos){



}

// ejercicio 15 no lo vimos 

// ejercicio 16

function buscarProducto(productos, nombre){

    let producto = productos.filter(e => e.nombre === nombre)

    return producto


}

//ejercicio 17

function productoM(productos){

    let productosM = productos.filter(e => e.precio += precio >50)

    return productosM

}

//ejercicio 18

function promedio(numeros){

    let notaNum = numeros.num
    let cantidadNum = numeros.length
    let promedioNum = notaNum / cantidadNum

    return promedioNum
}

//ejercicio 19 


const usuarios = [

{id:1, nombre:"Ana", edad:20},

{id:2, nombre:"Juan", edad:15},

{id:3, nombre:"Pedro", edad:30}

]

function obtenerUsuarios(){
    return usuarios
}

//ejercicio 20 

function obtenerUsuarioPorId(id){

    let usuarioM = usuarios.filter(e => e.id === id)
    
    return usuarioM;
    
}

//ejercicio 21

function obtenerMayores(){
    
    let usuariosMay = usuarios.filter(e => e.edad >= 18)

    return usuariosMay
}

//ejercicio 22

function agregarUsuario(nombre, edad){

    usuarios.push({id: usuarios.length + 1, nombre: nombre, edad: edad})
    
}



