// se inician variables
var num1, num2, suma, resta, division, multiplicacion, modulo;

// mensaje de bienvenida al usuario
alert("Operatoria de números");

// se pide a usuario ingresar números mayores a cero
num1 = prompt("Escribe el primer número (mayor a 0): ");
num2 = prompt("Escribe el segundo número (mayor a 0): ");

// se realizan operatorias con números ingresados
suma = Number(num1) + Number(num2);
resta = Number(num1) - Number(num2);
division = Number(num1) / Number(num2);
multiplicacion = Number(num1) * Number(num2);
modulo = Number(num1) % Number(num2);

// se muestran resultados de operatoria
alert (`Los resultados son los siguientes -> Suma ${suma}, Resta ${resta}, División ${division}, Multiplicación ${multiplicacion}, Módulo ${modulo}`);