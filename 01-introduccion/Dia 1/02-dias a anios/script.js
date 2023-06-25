/*
Crear un programa que pida al usuario una cantidad de días y que muestre su
equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el
resultado debe ser 1 año, 1 semana y 1 día.
Se debe considerar lo siguiente:
● 1 año tiene 365 días
● 1 semana tiene 7 días
Se recomienda usar la función Math.floor para obtener la parte entera de un número
decimal.
*/

var dias;
var anio;
var semana;

dias = parseInt(prompt("Ingresa cantidad de dias"));

anio = Math.floor(dias /365); 
semana = Math.floor(( dias - (anio * 365)  )/7 ) ;
dias = Math.floor(dias - ((anio*365) + (semana*7)) ) ;

document.write(`Sus dias transformados a años semanas y dias son ${anio} año(os), ${semana} semana(s) y ${dias} dias`)
