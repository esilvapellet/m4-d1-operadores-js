// se inician variables
var celsius, kelvin, farenheit;

// mensaje de bienvenida al usuario
alert("Conversor de temperatura");

// se pide a usuario ingresar temperatura en grados celsius
celsius = prompt("Ingrese temperatura (en grados celsius): ");

// se realiza conversión de temperatura
kelvin = (parseFloat(celsius) + (273.15));
farenheit = ((parseFloat(celsius) * (9/5)) + 32);

// se muestran resultados de conversión
alert(`La equivalencia en temperatura es: ${celsius} °C, ${kelvin} °K y ${farenheit} °F`);