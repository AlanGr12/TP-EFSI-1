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
    let contraseñaPosible = false
    if(password.length >= 8 && /[0-9]/.test(password)){
        contraseñaPosible = true;

    }

    return contraseñaPosible
}

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
