// var x = 20;
// var z = 30;
// resultado = (x-z) >(z-x)

// alert (resultado)

// var mostrarMensaje = true;

// if (mostrarMensaje) {
//     alert("Verdadero")
// }

/**************************************************************************** */
/*
Solicitar al usuario que ingrese dos números enteros y comparar si el primer número es
menor o igual que el segundo. Luego, comprobar si el segundo número es mayor o igual que
cero. Finalmente, comprobar si el primer número es menor que cero o distinto de cero.
*/
/*
var num1;
var num2;

num1 = parseInt(prompt("Ingrese un numero"));
num2 = parseInt(prompt("Ingrese un numero mas"));

if (num1 <= num2) {
    alert(`El ${num1} es menor que ${num2}`);
}
if(num2>=0) {
    alert(`El ${num2} es mayor o igual a 0`)
    }
if(num1 < 0 || num1 != 0) {
    alert(`Se cumple que  ${num1} o es menor o diferente que cero`)
}
*/
      
/************************************************************ */
/*
Realiza un programa en JavaScript implementando la estructura de control if, que solicite al
usuario ingresar dos números y que compruebe si el número 1 es positivo, si el número dos
es negativo y finalmente si el número 2 es mayor o igual que el número 1, indicando si se
cumple cada condición mediante un alert.
*/


/*
var num1 = parseInt(prompt("Ingresa un umero"));
var num2 = parseInt(prompt("Ingresa otro numero"));

if (num1 >0 ) {
    alert(`El ${num1} es prositivo`);
}
if (num2 <0) {
    alert(`El ${num2} es negativo`)
}
if (num2 >= num1 ) {
    alert(`El ${num2} es mayor o igual que ${num1}`)
} 
*/

/*************************************************************/

/*
var edad;
edad = parseInt(prompt("Ingresa tu edad"));

if (edad >= 18) {
    alert("Eres mayor edad")
} else {
    alert("Eres menor de edad")
}
*/
/*************************************************************/
/*
var nombre = prompt("Ingresa tu nombre");

if (nombre === "") {
    alert("No ingresaste ningun nombre")
} else {
    alert(`Hola ${nombre}`)
}
*/
/*************************************************************/

var nombre = "Victor";

if (nombre == "Gary") {
    alert("Hola Gary")
} else if (nombre == "Victor") {
    alert("Hola Victor")
} else {
    alert("¿Quien eres?")
}