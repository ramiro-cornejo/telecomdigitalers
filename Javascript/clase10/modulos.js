// Procedimiento
function mostrarSaludo() {
    console.log("Bienvenidos");
}

// Funcion
function obtenerFechaHoy() {
    //let fecha = new Date()
    //return fecha;

    return new Date();
}

console.log(obtenerFechaHoy());

// Procedimiento con parametros
function mostrarSaludoPersonalizado( nombre ) {
    //console.log("Bienvenido a EducacionIT " + nombre);
    document.write("Bienvenido a EducacionIT " + nombre);
}

mostrarSaludoPersonalizado("Ramiro")

// Req. #1 Imprimir num pares hasta num dado
function imprimirParesHasta(numLimite){
    // for(let numero = 0; numero <= numLimite; numero ++) {
    //     if (numero % 2 === 0) {
    //         console.log(numero)
    //     } 
    // }

    for(let numero = 0; numero <= numLimite; numero++) {
        if (devolverSiNumPar(numero)) {
            console.log(numero);
        }
    }
}
imprimirParesHasta(10);

// Req. #2 Devolver si un num es par
function devolverSiNumPar(numero){
    return numero % 2 === 0;
}

let unNumero = 16;
console.log( unNumero,"El num es par? " ,devolverSiNumPar(unNumero));

// Req. #3 Imprimir la tabla de multiplicar de un num dado
function imprimirTablaMultiplicar(numero){
    for(let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} =`, numero * i);
    }
}
imprimirTablaMultiplicar(4);

// Req. #4 Sumar tres numeros
function sumarTresNum(num1, num2, num3) {
    let suma = num1 + num2 + num3;
    return suma;
}

console.log(sumarTresNum(10,5,9));