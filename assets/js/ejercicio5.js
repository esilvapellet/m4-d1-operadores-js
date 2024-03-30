// se inician variables
var num1, num2, num3, num4, num5, suma, promedio;

// mensaje de bienvenida al usuario
alert("Operatoria con 5 números");

// se pide a usuario ingresar números mayores a cero
num1 = prompt("Escribe el primer número (mayor a 0): ");
num2 = prompt("Escribe el segundo número (mayor a 0): ");
num3 = prompt("Escribe el tercer número (mayor a 0): ");
num4 = prompt("Escribe el cuarto número (mayor a 0): ");
num5 = prompt("Escribe el quinto número (mayor a 0): ");

// se realizan operatorias con números ingresados
suma = Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5);
promedio = parseInt(suma / 5);

// se muestran resultados de operatoria
alert (`Los resultados son los siguientes -> Suma ${suma}, Promedio ${promedio}`);