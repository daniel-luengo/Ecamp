/*
Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y
que la transforme a grados Kelvin y Fahrenheit.
Se debe considerar la siguiente información respecto a la equivalencia de las
escalas de temperatura:
● 0 Grados Celsius corresponden a 273,15 Kelvin. La fórmula para convertirlos
es 0 °C + 273.15 = 273.15 K
● 0 Grados Celsius corresponden a 32 Fahrenheit. La fórmula para convertirlos
es (0 °C × 9/5) + 32 = 32 °F
*/

var gCelcius;
var kelvin;
var farenheit;


gCelcius = parseInt(prompt("Ingresa grados celcius"));

kelvin = gCelcius +273.15;
farenheit = (gCelcius * (9/5) +32 );

document.write(`Tus ${gCelcius} grados celcius transformados a grados farenhetin son: ${farenheit} y ademas tus ${gCelcius} grados celcius transformados a Kelvin son ${kelvin}`)
