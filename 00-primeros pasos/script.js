// let nombre;
// let edad;

// nombre = prompt("Ingrese su nombre");
// edad = prompt("Ingrese su edad");

// document.write(nombre);
// document.write(" ")
// document.write(edad);


/***************************************************************************************************/

/*
Crear un programa con JavaScript desde un archivo externo que solicite al usuario dos
números enteros mediante el uso del método “prompt()”, almacenando esos dos números
en variables separadas y realizando las cuatro operaciones matemáticas básicas (suma,
resta, multiplicación y división). Luego mostrar el resultado para cada operación en el
mismo documento .html mediante el comando document.write().
*/

/*
var num1;
var num2;

num1 = parseInt( prompt("Ingrese numero 1"));
num2 = parseInt( prompt("Ingrese numero 2"));

var suma = num1 + num2;
var resta = num1 - num2;
var division = num1 / num2;
var multiplicación = num1 * num2;

document.write("La suma de " + num1 + " y " + num2 + " es: " + suma +  );
document.write("La resta de " + num1 + " - " + num2 + " es: " + resta);
document.write("La division de " + num1 + " / " + num2 + "es: " + division);
document.write("La multiplicacion de " + num1 + " y "+ num2 + "es: " +multiplicación );*/

/***************************************************************************************************/

/*Ejercicio propuesto (10)
Realizar un programa que permita determinar el área de un triángulo rectángulo si el usuario
ingresa los valores como la base y la altura del triángulo. Fórmula: área=(base*altura)/2.
Mostrar el resultado final en una alert.*/
/*
var base;
var altura;


base = parseInt(prompt("Ingrese la base de un triangulo"));
altura = parseInt(prompt("Ingrese la altura de un triangulo"));
var area = parseFloat( (base * altura)/2)
document.write("El area del triangulo es: " + area );*/
/***************************************************************************************************/

/*
Ejercicio Propuesto (11)
Desarrollar un programa en JavaScript que permita calcular el área de una circunferencia,
partiendo de la fórmula: área = 𝝥*radio2. (La constante pi tiene un valor aproximado de
3,1416 y debe ser declarado en una variable del tipo constante).
*/
/*
const pi = 3.1416;
var radio;


radio = parseInt(prompt("Ingrese valor de radio"));

area = pi * (radio * radio);

document.write("El area de la circunferencia es " + area);
*/

/***************************************************************************************************/
/*
Ejercicio Propuesto (12)
Diseñar un programa para calcular el área de un rombo, en donde el área es se calcula
mediante la fórmula: área = (Diagonal mayor * diagonal menor)/2.
*/
/*
var diagonalMayor;
var diagonalMenor;


diagonalMayor = parseInt(prompt("Ingrese diagonal mayor del rombo"));
diagonalMenor = parseInt(prompt("Ingrese diagonal menor del rombo"));

var area =  (diagonalMayor*diagonalMenor)/2;

document.write("El area del rombo es igual a " + area)
*/
/***************************************************************************************************/
/*
var dato;

dato = prompt=("Ingrese un dato cualquiera");

document.write("el tipo de dato que ingreso es " + typeof(dato))
*/
/***************************************************************************************************/

// var nombre = "Daniel";

// alert(`Hola ${nombre}`)
// alert(`Hola ${prompt('Ingresa tu nombre')}`)

/*
var texto_a = "Saludos";
var texto_b = "a todos";
var num1 = 20;
var num2 = 30;
console.log("La suma de: "+num1+", más: "+num2+", es: "+num1+num2+".");
console.log(texto_a+" "+texto_b+".");
*/
// var num1 = 20;
// var num2 = 30;

// console.log(`La suma de ${num1} + ${num2} es ${num1 + num2};`)
// console.log(`Saludos a todos`)

/***************************************************************************************************/
/*

Ejercicio guiado: Resolver un problema usando variables y tipos de datos
Una vez manejado el uso de variables, es posible utilizarlas para resolver diferentes tipos de
problemas. Se solicita codificar lo siguiente usando JavaScript:
1. Pide al usuario que ingrese su nombre.
2. Pide al usuario que ingrese un número.
3. Pide al usuario que ingrese un segundo número.
4. Muestra la suma, la resta, la división y la multiplicación entre los dos números
ingresados.
5. Debe ser un único mensaje por cada operación (4 en total).
6. El mensaje debe seguir el siguiente formato: {Nombre del usuario}, el resultado de
{nombre de la operación} {primer número} y {segundo número} es {resultado de la
operación}. Por ejemplo: "Alexis, el resultado de sumar 1 y 2 es 3".
7. Para mostrar el mensaje pueden implementar document.write();*/

// var nombre;
// var num1;
// var num2;

// alert(` ${num1 = parseInt(prompt('Ingresa  un numero'))} ${num2 = parseInt(prompt('Ingresa otro numero'))} Hola ${prompt('Ingresa tu nombre')} el resultado de sumar ${num1} + ${num2} es ${num1 + num2}`)

// nombre = prompt("Ingresa tu nombre");
// num1 = parseInt(prompt("Ingresa un numero"));
// num2 = parseInt(prompt("Ingresa numero 2"));

// var suma = num1 + num2;

// document.write(`Hola ${nombre}, el resultado de la sumar ${num1} y ${num2} es: ${suma}`)


/***************************************************************************************************/
/*
Realizar un programa con JavaScript que solicite al usuario el primer nombre, el
primer apellido, la edad y el número de identificación único, para mostrar en un solo
mensaje mediante la instrucción document.write() y con interpolación de variables lo
siguiente: Hola {nombre}, tu edad es {edad} y tu número de identificación es {id}.
Ejemplo: “Hola Juan, tu edad es 34 y tu número de identificación es 12345678-9”
*/

var nombre;
var apellidoPaterno;
var edad;
var numeroId;

nombre = prompt("Ingresa tu nombre");
apellidoPaterno = prompt("Ingrese apellido paterno");
edad = parseInt(prompt ("Ingresa tu edad"));
numeroId= parseInt(prompt("Ingresa el numero de tu id"))


document.write(`Hola ${nombre + ' ' + apellidoPaterno}   tu edad es ${edad} y el numero de identificacion es ${numeroId}`)


