
/*let number = 1
while (number <= 12) {
    console.log(number);
    number = number + 2;
}

let chicasTec = ["Angelis", "Kiara", "Madeley", "Kate", "Esteisy", "Ana", "Milenka", "Dailyn"];
console.log(chicasTec[chicasTec.length - 1]);

let pos = 0;
while (pos < chicasTec.length) {
    console.log(chicasTec[pos])
    


let chicaABuscar = "Esteisy";

if (chicasTec[pos] == chicaABuscar) {
    console.log("Se encontró a"+chicaABuscar);
    console.log("se encuentra en la posición"+pos);
}
else {
    console.log("esta alumna no esta matriculada");
}
pos = pos + 1;
} 

function sumar(a, b) {
    let resultado = a + b;
    return resultado;
}

let valorsuma = sumar(10, 7);
console.log(valorsuma);

function restar(a, b) {
    let resultadoResta = a - b;
    return resultadoResta;
}

let valorResta = restar(55, 36);
console.log(valorResta);

function imprimirNumerosDel1Al(num) {
    let number = 1;
    while (number <= num) {
        console.log(number);
        number++;
    }
}

imprimirNumerosDel1Al(28)

function verificarPar(numero){
    if(numero%2==0);
    return 0;
}
*/

import { saludo } from './modulos.js';

console.log(saludo("hola a todxs"));

function hallarPrecioFinal(precioOriginal, porcentajeDescuento) {
    const descuento = precioOriginal * (porcentajeDescuento / 100);

    const precioFinal = precioOriginal - descuento;
    return precioFinal
}

const precioOriginal = 200;
const porcentajeDescuento = 20;
const precioFinal = hallarPrecioFinal(precioOriginal, porcentajeDescuento);

console.log("E precio final con descuento es de S/.", precioFinal);


const HermanoMayor = 15
const HermanoDelMedio = 13
const HermanoMenor = 11

function HermanoMayor(edad1, edad2, edad3) {
    if { edad1 > edad2 && edad1 > edad3}
return ("El hermano mayor tiene" edad1 + "años.");
else if { edad2< edad1 && edad2 < edad3}
return ("El hermano del medio tiene" edad2 + "años.");
else {
    return ("El hermano menor tiene" edad3 + "años.")
}
}
console.log(15, 13, 11)

function promedioDeEdades(){}