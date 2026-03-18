//ejercicio 1
let nombre = "ALAN";
formatearNombre(nombre)
function formatearNombre(nombre){
    let nombreMinuscula = nombre.slice(1).toLowerCase();
    let nombreMayuscula = nombre[0].toUpperCase();
    return `${nombreMayuscula}${nombreMinuscula}`
}

//ejercicio 2

let texto = "Hola como estas"
contarLetras(texto);
function contarLetras(texto){
let contarTexto = texto.replace(/ /g,"").length;
return contarTexto;
}

//ejercicio 3
let a = 2
let b = 3
let c = 5
maxNumero(a,b,c)
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

let contra = "todobin123"
validarPassword(contra);
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


//ejercicio 5


function sumaArray(numeros){
let listaNumeros = 0;
for(let i = 0; i < numeros.length; i++){
    listaNumeros = listaNumeros + numeros[i]
}

return listaNumeros
}

console.log(sumaArray([3,5,10]))

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

console.log(mayorNumero([24,47,21,24,3]))

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

console.log(obtenerPares([4,2,7,5,8,1]))

//ejercicio 8

function descripcionUsuario(usuario){

let descUser = `${usuario.nombre} tiene ${usuario.edad} años`

return descUser
}

console.log(descripcionUsuario({nombre:"Nico", edad:21}))

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

console.log(calcularPrecio([{nombre:"Mouse",precio:10},{nombre:"Teclado",precio:25},{nombre:"Monitor",precio:200}]))

//ejercicio 11

function nombresUsuarios(usuarios){

let nombreUsuarios = usuarios.map(e => e.nombre)

return nombreUsuarios;

}

console.log(nombresUsuarios([{nombre:"Ana",edad:17},{nombre:"Juan",edad:25}]))

//ejercicio 12

function usuariosMay(usuarios){

    let usuariosMayore = usuarios.filter(e => e.edad >= 18)

    return usuariosMayore

}

console.log(usuariosMay([{nombre:"Ana",edad:17},{nombre:"Juan",edad:25}]))

//ejercicio 13

function sumaEdades(usuarios){

    let edades = usuarios.reduce((total,usuario) => total + usuario.edad, 0)

    return edades

}

console.log(sumaEdades([{nombre:"Ana",edad:17},{nombre:"Juan",edad:25}]))

//ejercicio 14 no lo vimos

function extraerVar(productos){



}

// ejercicio 15 no lo vimos 

// ejercicio 16

function buscarProducto(productos, nombre){

    let producto = productos.filter(e => e.nombre === nombre)

    return producto


}

console.log(buscarProducto([{nombre:"Mouse",precio:10},{nombre:"Teclado",precio:25}], "Mouse"))

//ejercicio 17

function productoM(productos){

    let productosM = productos.filter(e => e.precio > 50)

    return productosM

}

console.log(productoM([{nombre:"Mouse",precio:10},{nombre:"Monitor",precio:200}]))

//ejercicio 18

function promedio(numeros){

    let notaNum = sumaArray(numeros)
    let cantidadNum = numeros.length
    let promedioNum = notaNum / cantidadNum

    return promedioNum
}

console.log(promedio([10,8,6,9]))

//ejercicio 19 


const usuarios = [

{id:1, nombre:"Ana", edad:20},

{id:2, nombre:"Juan", edad:15},

{id:3, nombre:"Pedro", edad:30}

]

function obtenerUsuarios(){
    return usuarios
}

console.log(obtenerUsuarios())

//ejercicio 20 

function obtenerUsuarioPorId(id){

    let usuarioM = usuarios.filter(e => e.id === id)
    
    return usuarioM;
    
}

console.log(obtenerUsuarioPorId(2))

//ejercicio 21

function obtenerMayores(){
    
    let usuariosMay = usuarios.filter(e => e.edad >= 18)

    return usuariosMay
}

console.log(obtenerMayores())

//ejercicio 22

function agregarUsuario(nombre, edad){

    usuarios.push({id: usuarios.length + 1, nombre: nombre, edad: edad})
    
}


