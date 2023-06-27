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

var num1;
var num2;

num1 = parseInt(prompt("Ingrese un numero"));
num2 = parseInt(prompt("Ingrese un numero mas"));

if (num1 <= num2) {
    if(num2>=0) {
        if(num1 < 0 || num1 != 0)
        alert("TAREA COMPLETADA")
    }
}
else {
    ("No se cumplen los parametros")
}