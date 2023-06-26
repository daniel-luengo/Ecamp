/*
Crear un programa que solicite al usuario 5 números y realice los cálculos que se
piden a continuación.
● La suma de todos los números.
● El promedio de los 5 números ingresados.
*/

var num1;
var num2;
var num3;
var num4;
var num5;

num1 = parseInt(prompt("Ingrese Primer numero"));
num2 = parseInt(prompt("Ingrese numero 2"));
num3 = parseInt(prompt("Ingrese numero 3"));
num4 = parseInt(prompt("Ingrese numero 4"));
num5 = parseInt(prompt("Ingrese numero 5"));

var suma = num1 + num2 + num3 + num4 + num5;
var promedio = suma / 5;

document.write(`La suma de los 5 numeros es ${suma} y el promedio es ${promedio}`);